import { Fragment, useState } from "react";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import ContactDetails from "./ContactDetails";

export default function Heading() {
  const [person, setPerson] = useState("Maciej Jaskolka");
  const [mode, setMode] = useState("display");

  const showInput = () => {
    setMode("editing");
  };

  const saveInput = () => {
    setMode("display");
  };

  const handleChange = (event) => {
    setPerson(event.target.value);
  };

  return (
    <header>
      <h1 className="text-5xl">Curriculum Vitae</h1>
      <div className="cv-author mb-4 mt-2 flex gap-5 align-baseline">
        {mode === "display" && (
          <Fragment>
            <h2 className="text-3xl">{person}</h2>
            <EditButton onClick={showInput}></EditButton>
          </Fragment>
        )}
        {mode === "editing" && (
          <Fragment>
            <input
              onChange={handleChange}
              value={person}
              className="border-2 border-solid border-slate-200 text-3xl"
            />
            <SaveButton onClick={saveInput}></SaveButton>
          </Fragment>
        )}
      </div>
      <ContactDetails></ContactDetails>
    </header>
  );
}
