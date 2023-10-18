export interface Note {
  id: string;
  title: string;
  isCompleted: boolean;
}

export type NoteContextValue = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  toggleNoteCompletedById: (noteId: string) => void;
};
