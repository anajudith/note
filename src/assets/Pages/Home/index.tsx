import imageFundo from "../../../images/homeGif.gif";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <img
        className="w-full h-full object-cover"
        src={imageFundo}
        alt="loading..."
      />
    </div>
  );
}
