import { Fragment, useState } from "react";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import ContactDetails from "./ContactDetails";

export default function Heading() {
  const [person, setPerson] = useState("Your Name");
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
    <header className="mb-8">
      <h1 className="mb-4 font-serif text-6xl font-black">Curriculum Vitae</h1>
      <div className="cv-author mb-6 mt-2 flex items-stretch gap-5 font-medium">
        {mode === "display" && (
          <Fragment>
            <h2 className="text-4xl font-bold">{person}</h2>
            <EditButton onClick={showInput}></EditButton>
          </Fragment>
        )}
        {mode === "editing" && (
          <Fragment>
            <input
              onChange={handleChange}
              value={person}
              className="border-2 border-solid border-slate-200 text-2xl"
            />
            <SaveButton onClick={saveInput}></SaveButton>
          </Fragment>
        )}
      </div>
      <ContactDetails></ContactDetails>
    </header>
  );
}
