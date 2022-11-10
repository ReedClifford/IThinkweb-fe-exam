import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/users.contexts";

const CreateUserModal = () => {
  const { createUserModalActive, setCreateUserModalActive } =
    useContext(UserContext);
  const defaultFormDetails = {
    fName: "",
    lName: "",
    email: "",
  };

  const [formDetails, setFormDetails] = useState(defaultFormDetails);
  const { fName, email, lName } = formDetails;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const closeModal = () => {
    setCreateUserModalActive(!createUserModalActive);
  };

  //   const resetFormFields = () => {
  //     setFormDetails(defaultFormDetails);
  //   };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setCreateUserModalActive(!createUserModalActive);
  };
  return (
    <div className="modal">
      <div className="modal-contents">
        <h1 className="font-semibold my-3 text-neutral-300">
          Create a new user data
        </h1>
        <img
          src="https://st4.depositphotos.com/11634452/41441/v/600/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg"
          alt="xd"
          className="w-64"
        />
        <form className="form" onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="first name"
            className="inputs"
            value={fName}
            name="fName"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="last name"
            className="inputs"
            value={lName}
            name="lName"
            onChange={onChangeHandler}
          />
          <input
            type="email"
            placeholder="email"
            className="inputs"
            value={email}
            name="email"
            onChange={onChangeHandler}
          />

          <div className="container flex justify-evenly items-center my-4">
            <button type="submit" className="create-modal-btn">
              Create
            </button>
            <span className="delete-modal-close-btn" onClick={closeModal}>
              Close
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;
