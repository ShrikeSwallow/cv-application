import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

const ContactDetails = () => {
  return (
    <>
      <form
        action=""
        className="grid grid-cols-[min-content_1fr] gap-x-2 gap-y-4"
      >
        <label htmlFor="telephone">Telephone</label>
        <input
          className="border-2 border-solid border-slate-200"
          type="text"
          id="telephone"
          name="telephone"
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-solid border-slate-200"
          type="text"
          id="email"
          name="email"
        />
        <label htmlFor="address">Address</label>
        <input
          className="border-2 border-solid border-slate-200"
          type="textarea"
          id="address"
          name="address"
        />
      </form>
    </>
  );
};
export default ContactDetails;
