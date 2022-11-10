import { Fragment } from "react";

import { useContext } from "react";
import { UserContext } from "../../../contexts/users.contexts";

const DeleteModalContents = ({ fName, lName, avatar, email }) => {
  const { deleteModalActive, setDeleteModalActive } = useContext(UserContext);
  const closeModal = () => {
    setDeleteModalActive(!deleteModalActive);
  };
  return (
    <Fragment>
      <h1 className="font-semibold my-3 text-neutral-300">
        Are you sure you want to delete this user?
      </h1>
      <img src={avatar} alt="xd" className="w-64" />
      <p className="text-neutral-300 mt-2">
        {fName} {lName}
      </p>
      <span className="text-neutral-300">{email}</span>
      <div className="container flex justify-evenly items-center my-4">
        <button
          className="delete-modal-delete-btn"
          onClick={() => alert("succesfully deleted")}
        >
          Delete
        </button>
        <button className="delete-modal-close-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default DeleteModalContents;
