import { Fragment, useContext } from "react";
import { UserContext } from "../../../contexts/users.contexts";

const UpdateModalContents = ({ fName, lName, avatar, email }) => {
  const { updateModalActive, setUpdateModalActive } = useContext(UserContext);

  const closeModal = () => {
    setUpdateModalActive(!updateModalActive);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setUpdateModalActive(!updateModalActive);
  };
  return (
    <Fragment>
      <h1 className="font-semibold my-3 text-neutral-300">
        Update this users data
      </h1>
      <img src={avatar} alt="xd" className="w-64" />
      <form
        className="flex flex-col justify-center items-center gap-2 my-2  w-full p-7 "
        onSubmit={formSubmitHandler}
      >
        <input
          type="text"
          placeholder="first name"
          className="p-2 w-full focus:outline-none"
          value={fName}
          onChange={() => console.log("change")}
        />
        <input
          type="text"
          placeholder="last name"
          className="p-2 w-full focus:outline-none"
          value={lName}
          onChange={() => console.log("change")}
        />
        <input
          type="email"
          placeholder="email"
          className="p-2 w-full focus:outline-none"
          value={email}
          onChange={() => console.log("change")}
        />
        <div className="container flex justify-evenly items-center my-4">
          <button type="submit" className="update-modal-btn">
            Update
          </button>

          <span className="delete-modal-close-btn" onClick={closeModal}>
            Close
          </span>
        </div>
      </form>
    </Fragment>
  );
};

export default UpdateModalContents;
