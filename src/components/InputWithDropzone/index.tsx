import React from "react";
import Button from "../Button";
import { useDropzone } from "react-dropzone";
import { BiArchiveOut } from "react-icons/bi";
import { OnAddNote } from "./InputWithDropzone.structure";

export default function InputWithDropzone({
  onAddNote,
}: {
  onAddNote: OnAddNote;
}) {
  const [title, setTitle] = React.useState("" as string);
  const [image, setImage] = React.useState<string | null>(null);
  const [imageName, setImageName] = React.useState<string | null>(null);
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      const reader = new FileReader();
      const file = acceptedFiles[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          setImageName(file.name);
        }
      };
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (image) {
      onAddNote(title, image);
    } else {
      onAddNote(title, "");
    }
    setTitle("");
    setImage(null);
  }

  function onChangeTitle(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setTitle(event.target.value);
  }

  return (
    <header className="text-black flex items-center justify-center pt-[100px] pb-[50px] relative">
      <form
        onSubmit={handleSubmit}
        className="absolute h-[84px]  w-[100%] max-w-[736px] flex gap-[8px] py-[16px]"
      >
        <div className="h-full flex-1 bg-white border border-slate-950 rounded-lg p-4 text-base flex items-center">
          <input
            className="w-full h-full bg-transparent text-slate-950 outline-none"
            placeholder="Add new Annotation"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
          <div
            className="justify-center ml-[-60px] flex items-center text-slate-900 p-4 cursor-pointer bg-gray-800 rounded-lg"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="">Solte os arquivos aqui.</p>
            ) : (
              <p className="text-center flex gap-2">
                {imageName ? imageName : ""}
                <BiArchiveOut color="black" size={20} />
              </p>
            )}
          </div>
        </div>

        <Button />
      </form>
    </header>
  );
}
