import { useContext } from "react";
import { UserContext } from "../contexts/users.contexts";
import CreateUserModal from "./modals/create/CreateUserModal";
import UserData from "./UserData";
const UserTable = () => {
  const { page, setPage, setCreateUserModalActive, createUserModalActive } =
    useContext(UserContext);
  const nextPageButtonHandler = () => {
    if (page >= 1) setPage(page + 1);
  };
  const backButtonHandler = () => {
    if (page !== 1) setPage(page - 1);
  };
  const createUserHandler = () => {
    setCreateUserModalActive(!createUserModalActive);
  };
  return (
    <div className="table-container">
      <div className="table-text-header-container">
        <h1 className="text-3xl font-bold">User Table List</h1>
        <button className="create-new-user-btn" onClick={createUserHandler}>
          Create New User
        </button>
      </div>
      <table className="table ">
        <thead className="text-white">
          <tr>
            <th className="table-head">ID</th>
            <th className="table-head">Avatar</th>
            <th className="table-head">Email</th>
            <th className="table-head">FirstName</th>
            <th className="table-head">LastName</th>
            <th className="table-head">Action</th>
          </tr>
        </thead>
        <tbody className="bg-zinc-900">
          <UserData />
        </tbody>
      </table>
      <div className="navigate-btn-container">
        <button className="table-navigate-btn" onClick={backButtonHandler}>
          back
        </button>
        <button className="table-navigate-btn" onClick={nextPageButtonHandler}>
          next
        </button>
      </div>
      {createUserModalActive ? <CreateUserModal /> : null}
    </div>
  );
};
export default UserTable;
