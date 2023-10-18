export interface Note {
  id: string;
  title: string;
  isCompleted: boolean;
  image?: string;
}

export interface NoteProps {
  note: Note;
  onDelete: (noteId: string) => void;
  onComplete: (noteId: string, isCompleted: boolean) => void;
}
