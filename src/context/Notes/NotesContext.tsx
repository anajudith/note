import React from "react";
import { Note, NoteContextValue } from "./Notes.structure";

export const NoteContext = React.createContext<NoteContextValue>(null!);

export const NoteProvider = ({ children }: { children: JSX.Element }) => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const LOCAL_STORAGE_KEY = "todo:savednotes";

  function setNotesAndSave(newNotes: Note[]) {
    setNotes(newNotes);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newNotes));
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

  const contextValue: NoteContextValue = {
    notes,
    setNotes,
    toggleNoteCompletedById,
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};
