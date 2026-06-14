import "./Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser ,faCode, faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper" >
      <div className="nav-wrapper">

        <NavLink to="/" className={({ isActive }) => `icon-wrapper home-icon ${isActive ? "active" : ""}`}>
          <FontAwesomeIcon icon={faHome} size="lg" />
          <div className="label">Home</div>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>`icon-wrapper user-icon ${isActive ? "active" : ""}`}>
          <FontAwesomeIcon icon={faUser} size="lg" />
          <div className="label">About</div>
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => `icon-wrapper code-icon ${isActive ? "active" : ""}` }>
          <FontAwesomeIcon icon={faCode} size="lg" />
          <div className="label">Projects</div>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => `icon-wrapper card-icon ${isActive ? "active" : ""}` }>
          <FontAwesomeIcon icon={faAddressCard} size="lg" />
          <div className="label">Contact</div>
        </NavLink>

      </div>

    </nav>
  );
};

export default Navbar;