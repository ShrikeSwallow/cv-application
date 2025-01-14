import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

const WorkExperience = () => {
  const [previousJobs, setPreviousJobs] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [status, setStatus] = useState("typing");

  const handleAdd = () => {
    setFormVisible(true);
  };

  return (
    <>
      <h3 className="pb-2 text-lg font-medium">Work experience</h3>
      <button onClick={handleAdd} type="button">
        Add new
      </button>
      {formVisible && <ExperienceForm></ExperienceForm>}
      {/*<div className="former-job">
        <h4>Employer&apos;s Name</h4> 
        
      </div>*/}
    </>
  );
};

const submitForm = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 0);
  });
};

export default WorkExperience;
