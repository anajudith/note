import React from "react";
import { Note } from "./Notes.structure";

// Define a new type for the context value
type NoteContextValue = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  deleteNoteById: (noteId: string) => void;
  toggleNoteCompletedById: (noteId: string) => void;
  addNote: (noteTitle: string, noteImage: string) => void;
};

export const NoteContext = React.createContext<NoteContextValue>(null!);

export const NoteProvider = ({ children }: { children: JSX.Element }) => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const LOCAL_STORAGE_KEY = "todo:savednotes";

  function loadSavednotes() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }

  function setNotesAndSave(newNotes: Note[]) {
    setNotes(newNotes);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newNotes));
  }

  React.useEffect(() => {
    loadSavednotes();
  }, []);

  function addNote(noteTitle: string, noteImage: string) {
    const newNote = {
      id: crypto.randomUUID(),
      title: noteTitle,
      isCompleted: false,
      image: noteImage,
    };
    setNotesAndSave([newNote, ...notes]);
  }

  function toggleNoteCompletedById(noteId: string) {
    const newNotes = notes.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          isCompleted: !note.isCompleted,
        };
      }
      return note;
    });
    setNotesAndSave(newNotes);
  }

  function deleteNoteById(noteId: string) {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotesAndSave(newNotes);
  }

  const contextValue: NoteContextValue = {
    notes,
    setNotes,
    deleteNoteById,
    toggleNoteCompletedById,
    addNote,
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};
