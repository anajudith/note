import React from "react";
import InputNote from "../../components/InputWithDropzone";
import imageFundo from "../../assets/images/ComputerCat.gif";
import { RowNotes } from "../../components/RowNotes";
import { NoteContext } from "../../context/Notes/NotesContext";

export default function Private() {
  const { notes, addNote, toggleNoteCompletedById, deleteNoteById } =
    React.useContext(NoteContext);

  const notesQuantity = notes.length;
  const completednotes = notes.filter((note) => note.isCompleted).length;

  return (
    <div className="w-full h-full fixed">
      <img
        src={imageFundo}
        className="absolute bg-cover opacity-70 w-full h-full"
      />
      <div className="relative">
        <InputNote onAddNote={addNote} />
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
                onDelete={deleteNoteById}
                onComplete={toggleNoteCompletedById}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
