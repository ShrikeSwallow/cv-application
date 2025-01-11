import PropTypes from "prop-types";

export default function SaveButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-slate-400 px-6 py-1"
        type="button"
      >
        Save changes
      </button>
    </>
  );
}

SaveButton.propTypes = {
  onClick: PropTypes.func,
};
