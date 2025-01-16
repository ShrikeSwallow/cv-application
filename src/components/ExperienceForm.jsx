import { useState } from "react";
import PropTypes from "prop-types";

const ExperienceForm = ({ job, onSubmit }) => {
  const [data, setData] = useState({ ...job });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name.split("-").join("")]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-1">
        <label className="text-sm font-normal" htmlFor="employer">
          Company
        </label>
        <input
          className="mb-1 border-2 border-solid border-slate-200 text-sm"
          id="company"
          name="company"
          value={data.company}
          type="text"
          onChange={handleChange}
        />
        <label className="text-sm font-normal" htmlFor="job-title">
          Job title
        </label>
        <input
          className="mb-1 border-2 border-solid border-slate-200 text-sm"
          id="position"
          name="position"
          value={data.position}
          type="text"
          onChange={handleChange}
        />
        <label className="text-sm font-normal" htmlFor="time-period">
          Time period
        </label>
        <input
          className="mb-1 border-2 border-solid border-slate-200 text-sm"
          id="time-period"
          name="time-Period"
          value={data.timePeriod}
          type="text"
          onChange={handleChange}
        />
        <label
          className="col-span-2 text-sm font-normal"
          htmlFor="responsibilities"
        >
          Main responsibilities
        </label>
        <textarea
          className="col-span-2 border-2 border-solid border-slate-200 text-sm"
          id="responsibilities"
          name="responsibilities"
          value={data.responsibilities}
          rows={5}
          onChange={handleChange}
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

ExperienceForm.propTypes = {
  job: PropTypes.object,
  onSubmit: PropTypes.func,
};
