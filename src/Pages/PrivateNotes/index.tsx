import React from "react";
import { InputWithDropzone, RowNotes } from "../../components";
import imageFundo from "../../assets/images/ComputerCat.gif";
import { NoteContext } from "../../context/Notes/NotesContext";
import Notes from "../../service/Notes";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://iydrennoiyhajcaqiuao.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5ZHJlbm5vaXloYWpjYXFpdWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDYzNjcsImV4cCI6MjAxMzEyMjM2N30.dkGeuDZSWbhAXoDPBacSL0u4Uhm6xsYerwNn49fq6sU"
);

interface INote {
  id: string;
  title: string;
  isCompleted: boolean;
  image: string;
}

export default function Private() {
  const { notes, setNotes, toggleNoteCompletedById } =
    React.useContext(NoteContext);

  const [error, setError] = React.useState("" as string);

  const fetchNotes = async () => {
    const { data } = await supabase.from("note").select("*");

    if (data) {
      setNotes(data);
    }
  };

  const getNotes = React.useCallback(async () => {
    const responseGet = await Notes.getNotes();
    if (Array.isArray(responseGet)) {
      setNotes(responseGet);
    } else {
      console.error(responseGet);
      return;
    }
    console.log(responseGet);
  }, []);

  const deleteNotes = React.useCallback(async (noteId: string) => {
    try {
      const response = await Notes.deleteNotes(noteId);
      await fetchNotes();

      return response;
    } catch (error) {
      console.error("Erro:", error);
    }
  }, []);

  // const updateNotes = React.useCallback(
  //   async (noteId: string, completed: boolean) => {
  //     try {
  //       const response = await Notes.updateNotes(noteId, completed);
  //       if (response) {
  //         const newNotes = notes.map((note) => {
  //           if (note.id === noteId) {
  //             return {
  //               ...note,
  //               isCompleted: !note.isCompleted,
  //             };
  //           }
  //           return note;
  //         });
  //         setNotes(newNotes);
  //       } else {
  //         console.error("error");
  //       }
  //     } catch (error) {
  //       console.error("error", error);
  //     }
  //   },
  //   [notes, setNotes]
  // );

  const addNote = React.useCallback(
    async (noteTitle: string, noteImage: string) => {
      try {
        const newNote: INote = {
          id: crypto.randomUUID(),
          title: noteTitle,
          isCompleted: false,
          image: noteImage,
        };

        const response = await Notes.postNotes(
          newNote.id,
          newNote.title,
          newNote.isCompleted,
          newNote.image
        );
        const responseGet = await Notes.getNotes();

        if (!responseGet) {
          setError("Deu erro");
        }

        await fetchNotes();
        return response;
      } catch (error) {
        console.error("Erro:", error);
      }
    },
    []
  );

  React.useEffect(() => {
    getNotes();
    supabase
      .channel("table-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notes",
        },
        () => {
          fetchNotes();
        }
      )
      .subscribe();
  }, []);

  const notesQuantity = notes.length;
  const completednotes = notes.filter((note) => note.isCompleted).length;

  return (
    <div className="w-full h-full fixed">
      <img
        src={imageFundo}
        className="absolute bg-cover opacity-70 w-full h-full"
      />
      <div className="relative">
        <InputWithDropzone onAddNote={addNote} />
        <div className="flex items-center justify-center pb-[15px] text-slice-700 text-lg">
          {error}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-72 mb-10 ">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-white bg-slate-950 rounded-lg p-2">
              Anotações criadas
            </p>
            <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs font-semibold">
              {notesQuantity}
            </span>
          </div>

          <div className="flex items-center">
            <p className="font-semibold text-roxo bg-slate-950 rounded-lg p-2">
              Anotações concluídas
            </p>
            <span className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-xs font-semibold">
              {completednotes} of {notesQuantity}
            </span>
          </div>
        </div>
        <div
          className={`w-[100%] ${
            notes.length > 3 ? "max-h-[300px] overflow-y-scroll" : ""
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center items-center px-[50px]">
            {notes.map((note) => (
              <RowNotes
                key={note.id}
                note={note}
                onDelete={deleteNotes}
                onComplete={toggleNoteCompletedById}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
