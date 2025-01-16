import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

let nextId = 1;
const exampleJob = [
  {
    id: 0,
    company: "kint",
    position: "manager",
    timePeriod: "2017-2022",
    responsibilities: "lol",
  },
];

const WorkExperience = () => {
  const [previousJobs, setPreviousJobs] = useState(exampleJob);
  const [activeJob, setActiveJob] = useState(null);

  const handleEditClick = (job) => {
    setActiveJob(job);
  };

  const handleFormSubmit = (updatedJob) => {
    if (updatedJob.id) {
      setPreviousJobs(
        previousJobs.map((job) =>
          job.id === updatedJob.id ? updatedJob : job,
        ),
      );
    } else {
      setPreviousJobs([...previousJobs, { ...updatedJob, id: nextId++ }]);
    }
    setActiveJob(null);
  };

  const handleAddClick = () => {
    setActiveJob({
      id: null,
      company: "",
      position: "",
      timePeriod: "",
      responsibilities: "",
    });
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
                <button
                  className="bg-transparent p-0 text-2xl"
                  onClick={() => handleEditClick(job)}
                >
                  🖉
                </button>
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
      <button onClick={handleAddClick} type="button">
        Add new
      </button>
      {activeJob && (
        <ExperienceForm
          job={activeJob}
          onSubmit={handleFormSubmit}
        ></ExperienceForm>
      )}
    </>
  );
};

export default WorkExperience;
