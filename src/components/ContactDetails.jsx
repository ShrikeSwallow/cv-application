import EditButton from "./EditButton";
import SaveButton from "./SaveButton";

const ContactDetails = () => {
  return (
    <>
      <h3 className="pb-2 text-base font-medium">Contact details:</h3>
      <form
        action=""
        className="grid grid-cols-[min-content_0.5fr] items-center gap-2"
      >
        <label className="text-sm font-normal" htmlFor="telephone">
          Telephone
        </label>
        <input
          className="border-2 border-solid border-slate-200 text-sm"
          type="text"
          id="telephone"
          name="telephone"
        />
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 border-solid border-slate-200 text-sm"
          type="text"
          id="email"
          name="email"
        />
        <label className="text-sm" htmlFor="address">
          Address
        </label>
        <input
          className="border-2 border-solid border-slate-200 text-sm"
          type="textarea"
          id="address"
          name="address"
        />
      </form>
    </>
  );
};
export default ContactDetails;
