import UpdateModalContents from "./UpdateModalContents";
const UpdateModal = ({ selectedUser }) => {
  const UpdatedModalContents = <UpdateModalContents />;

  return (
    <div className="modal">
      <div className="modal-contents">
        {UpdatedModalContents ? (
          <UpdateModalContents
            fName={selectedUser.first_name}
            lName={selectedUser.last_name}
            email={selectedUser.email}
            avatar={selectedUser.avatar}
          />
        ) : null}
      </div>
    </div>
  );
};
export default UpdateModal;
