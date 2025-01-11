import { useState } from "react";
import EditButton from "./EditButton";

export default function Heading() {
  const [person, setPerson] = useState("Maciej Jaskolka");
  const [mode, setMode] = useState("display");

  const showInput = () => {
    setMode("editing");
    setPerson("LOL");
  };

  return (
    <header>
      <h1 className="text-5xl">Curriculum Vitae</h1>
      <div className="cv-author mt-2 flex gap-5 align-bottom">
        {mode === "display" && <h2 className="text-3xl">{person}</h2>}
        {mode === "editing" && <h2 className="text-3xl">{person}</h2>}
        <EditButton onClick={showInput}></EditButton>
      </div>
    </header>
  );
}
