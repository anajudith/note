export interface Note {
  id: string;
  title: string;
  isCompleted: boolean;
  image: string;
}

export type NoteContextValue = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  deleteNoteById: (noteId: string) => void;
  toggleNoteCompletedById: (noteId: string) => void;
  addNote: (noteTitle: string, noteImage: string) => void;
};
