import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../contexts/users.contexts";

import DeleteModal from "./modals/delete/DeleteModal";
import UpdateModal from "./modals/update/UpdateModal";

const TableActionButtons = ({ info }) => {
  const {
    deleteModalActive,
    updateModalActive,
    setDeleteModalActive,
    setUpdateModalActive,
    selectedUser,
    setSelectedUser,
  } = useContext(UserContext);

  const DeleteHandler = () => {
    console.log(`delete id:${info.id}`);
    setSelectedUser(info);
    console.log(selectedUser);
    setDeleteModalActive(!deleteModalActive);
  };
  const UpdateHandler = () => {
    console.log(`edit id:${info.id}`);
    setSelectedUser(info);
    console.log(selectedUser);
    setUpdateModalActive(!deleteModalActive);
  };

  return (
    <div className="action-btn-container">
      <button className="action-edit-btn" onClick={UpdateHandler}>
        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
      </button>

      <button className="action-delete-btn" onClick={DeleteHandler}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>
      {deleteModalActive ? <DeleteModal selectedUser={selectedUser} /> : null}
      {updateModalActive ? <UpdateModal selectedUser={selectedUser} /> : null}
    </div>
  );
};
export default TableActionButtons;
