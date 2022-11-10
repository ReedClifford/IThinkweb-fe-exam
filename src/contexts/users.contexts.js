import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  userData: [],
  setUserData: () => {},
  page: 1,
  setPage: () => {},
  deleteModalActive: false,
  updateModalActive: false,
  createUserModalActive: false,
  setUpdateModalActive: () => {},
  setCreateUserModalActive: () => {},
  setDeleteModalActive: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [updateModalActive, setUpdateModalActive] = useState(false);
  const [createUserModalActive, setCreateUserModalActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      setUserData(data.data);
    };
    fetchUserData();
  }, [page]);

  const values = {
    userData,
    page,
    setPage,
    deleteModalActive,
    updateModalActive,
    setDeleteModalActive,
    setUpdateModalActive,
    createUserModalActive,
    setCreateUserModalActive,
    selectedUser,
    setSelectedUser,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
