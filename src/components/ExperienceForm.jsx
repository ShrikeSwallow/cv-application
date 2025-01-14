import { useState } from "react";

const ExperienceForm = () => {
  const [status, setStatus] = useState("typing");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    await submitForm();
    setPreviousJobs(previousJobs.push({}));
    setStatus("success");
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-1">
        <label className="text-sm font-normal" htmlFor="employer">
          Company
        </label>
        <input
          className="mb-1 border-2 border-solid border-slate-200 text-sm"
          id="employer"
          type="text"
        />
        <label className="text-sm font-normal" htmlFor="job-title">
          Job title
        </label>
        <input
          className="mb-1 border-2 border-solid border-slate-200 text-sm"
          id="job-title"
          type="text"
        />
        <label className="text-sm font-normal" htmlFor="time-period">
          Time period
        </label>
        <input
          className="mb-1 border-2 border-solid border-slate-200 text-sm"
          id="time-period"
          type="text"
        />
        <label
          className="col-span-2 text-sm font-normal"
          htmlFor="responsibilities"
        >
          Main responsibilities
        </label>
        <textarea
          className="col-span-2 border-2 border-solid border-slate-200 text-sm"
          name="responsibilities"
          id="responsibilities"
          rows={5}
        ></textarea>
        <div className="mt-2 flex justify-center gap-8">
          <button className="bg-slate-400 disabled:opacity-25" type="submit">
            Save
          </button>
          <button className="bg-slate-200" type="button">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default ExperienceForm;
