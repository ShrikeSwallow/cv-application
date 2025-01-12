import { useState } from "react";

const ContactDetails = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

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
        <div className="col-span-full flex justify-center gap-8">
          <button className="bg-slate-400" type="submit">
            Save
          </button>
          <button className="bg-slate-200" type="reset">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
export default ContactDetails;
