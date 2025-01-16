import { useState } from "react";

const ContactDetails = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("typing");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    await submitForm();
    setStatus("success");
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <>
      <h3 className="pb-2 text-3xl font-semibold">Contact details</h3>
      {status === "typing" && (
        <form
          onSubmit={handleSubmit}
          action=""
          disabled={status === "submitting"}
          className="grid grid-cols-[min-content_0.5fr] items-baseline gap-2"
        >
          <label className="text-sm font-normal" htmlFor="telephone">
            Telephone
          </label>
          <input
            value={phone}
            onChange={handlePhoneChange}
            className="border-2 border-solid border-slate-200 text-sm"
            type="text"
            id="telephone"
            name="telephone"
          />
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={handleEmailChange}
            className="border-2 border-solid border-slate-200 text-sm"
            type="text"
            id="email"
            name="email"
          />
          <label className="text-sm" htmlFor="address">
            Address
          </label>
          <input
            value={address}
            onChange={handleAddressChange}
            className="border-2 border-solid border-slate-200 text-sm"
            type="text"
            id="address"
            name="address"
          />
          <div className="col-span-full flex justify-center gap-8">
            <button
              disabled={
                phone.length === 0 || email.length === 0 || address.length === 0
              }
              className="bg-slate-400 disabled:opacity-25"
              type="submit"
            >
              Save
            </button>
            <button className="bg-slate-200" type="button">
              Cancel
            </button>
          </div>
        </form>
      )}
      {status === "success" && (
        <div className="grid grid-cols-[min-content_0.5fr] items-center gap-2">
          <p className="text-sm font-normal">Telephone</p>
          <p className="text-sm font-normal">{phone}</p>
          <p className="text-sm font-normal">Email</p>
          <p className="text-sm font-normal">{email}</p>
          <p className="text-sm font-normal">Address</p>
          <p className="text-sm font-normal">{address}</p>
        </div>
      )}
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

export default ContactDetails;
