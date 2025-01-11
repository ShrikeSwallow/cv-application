export default function EditButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-slate-200 px-6 py-1"
        type="button"
      >
        Edit
      </button>
    </>
  );
}
