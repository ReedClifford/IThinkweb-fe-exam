import UserTable from "../components/UserTable";

const Users = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="container sm:p-32 md:p-5 ">
        <UserTable />
      </div>
    </main>
  );
};
export default Users;
