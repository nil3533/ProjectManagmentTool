import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ position: "sticky", top: "0" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-primary">
        <a
          className="navbar-brand"
          href="#"
          style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "verdana" }}
        >
          Project Managment Tool
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li
              className="nav-item "
              style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}
            >
              <Link className="nav-link active" to="/dashboard">
                <FontAwesomeIcon icon={faHome} /> &nbsp;Dashboard
              </Link>
            </li>
            <li
              className="nav-item active"
              style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}
            >
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faUserPlus} /> &nbsp;SignUp{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="nav-item active"
              style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}
            >
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
                &nbsp; Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
