import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="">IThinkWeb-Fe-exam</NavLink>
        </div>
        <ul className="navlinks-container">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
