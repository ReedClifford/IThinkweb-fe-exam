import { Fragment, useContext } from "react";
import { UserContext } from "../contexts/users.contexts";
import TableActionButtons from "./TableActionButtons";
const UserData = () => {
  const { userData } = useContext(UserContext);

  const renderedDataInfo =
    userData && userData.length > 0 ? (
      userData.map((info) => {
        // const { id, avatar, email, first_name, last_name } = info;
        return (
          <tr key={info.id} className="table-row">
            <td className="table-data">{info.id}</td>
            <td className="w-fit border border-neutral-700 mx-auto ">
              <img
                src={info.avatar}
                alt={info.id}
                className="object-cover object-fit"
              />
            </td>
            <td className="table-data">{info.email}</td>
            <td className="table-data">{info.first_name}</td>
            <td className="table-data">{info.last_name}</td>
            <td className="  border border-neutral-700 object-fit object-cover ">
              <TableActionButtons info={info} />
            </td>
          </tr>
        );
      })
    ) : (
      <tr key="XD" className="text-white">
        <td className="table-data ">NO DATA AVAILABLE</td>
        <td className="table-data ">NO DATA AVAILABLE</td>
        <td className="table-data ">NO DATA AVAILABLE</td>
        <td className="table-data ">NO DATA AVAILABLE</td>
        <td className="table-data ">NO DATA AVAILABLE</td>
        <td className="table-data ">NO DATA AVAILABLE</td>
      </tr>
    );
  return <Fragment>{renderedDataInfo}</Fragment>;
};

export default UserData;
