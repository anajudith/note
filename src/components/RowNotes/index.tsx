import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Modal from "react-modal";
import { TbTrash } from "react-icons/tb";
import { NoteProps } from "./RowNotes.structure";

export default function RowNotes({ note, onDelete, onComplete }: NoteProps) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-[300px] shadow-xlCustom h-[200px] border-hidden  bg-slate-300 border border-gray-700 rounded-lg flex flex-col p-4 m-2">
      <div className="flex gap-4 mb-[10px]">
        <button
          className="w-[20px] h-full bg-none border-none"
          onClick={() => onComplete(note.id)}
        >
          {note.isCompleted ? (
            <BsFillCheckCircleFill />
          ) : (
            <div className="w-[20px] h-[20px] rounded-full border-2 border-blue" />
          )}
        </button>
        <p
          className={
            note.isCompleted
              ? "text-gray text-xs line-through text-center overflow-wrap break-words max-w-[200px]"
              : "text-xs leading-5 text-center break-words text-ellipsis text-gray-800 max-w-[200px]"
          }
        >
          {note.title}
        </p>
        <button
          className="bg-transparent border-none text-gray "
          onClick={() => onDelete(note.id)}
        >
          <TbTrash size={20} />
        </button>
      </div>
      {note.image && (
        <div className="flex gap-2 ">
          <img
            src={note.image}
            alt="note image"
            style={{ width: "100px", height: "100px" }}
            onClick={openModal}
          />
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="note Image"
        className="h-[70%] pt-[90px] flex flex-col items-center justify-center"
      >
        {note.image && (
          <img
            src={note.image}
            alt="note image"
            className="max-w-full max-h-full"
          />
        )}
        <button
          className="bg-gray-300 px-3 w-[90px] h-[50px] bg-roxo  py-1 rounded-md mt-4"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
