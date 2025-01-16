import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

const WorkExperience = () => {
  const [previousJobs, setPreviousJobs] = useState([
    {
      id: 0,
      company: "kint",
      position: "manager",
      timePeriod: "2017-2022",
      responsibilities: "lol",
    },
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [status, setStatus] = useState("typing");

  const handleAdd = () => {
    setFormVisible(true);
  };

  return (
    <>
      <h3 className="pb-2 text-3xl font-medium">Work experience</h3>
      {previousJobs.map((job) => (
        <div key={job.id} className="company mb-4 flex flex-col gap-1">
          <div className="flex gap-4">
            <h4 className="text-2xl font-medium">{job.company}</h4>
            <ul className="flex gap-2">
              <li>
                <button className="bg-transparent p-0 text-2xl">🖉</button>
              </li>
              <li>
                <button
                  className="bg-transparent p-0 text-2xl"
                  onClick={() => {
                    setPreviousJobs(
                      previousJobs.filter((j) => j.id !== job.id),
                    );
                  }}
                >
                  🗑
                </button>
              </li>
            </ul>
          </div>
          <h5 className="text-lg">{job.position}</h5>
          <em>{job.timePeriod}</em>
          <p className="text-sm">{job.responsibilities}</p>
        </div>
      ))}
      <button onClick={handleAdd} type="button">
        Add new
      </button>
      {formVisible && (
        <ExperienceForm /*onSubmit={handleSubmit}*/></ExperienceForm>
      )}
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
