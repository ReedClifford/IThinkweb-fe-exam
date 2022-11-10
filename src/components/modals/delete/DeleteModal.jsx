import DeleteModalContents from "./DeleteModalContents";
const DeleteModal = ({ selectedUser }) => {
  const DeletedModalContents = <DeleteModalContents />;

  return (
    <div className="modal">
      <div className="modal-contents">
        {DeletedModalContents ? (
          <DeleteModalContents
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
export default DeleteModal;
