import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faHome, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import icon from "../../img/head.png";

const Header = () => {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "3000" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top" style={{ backgroundColor: "#e3f2fd" }}>
        <a className="navbar-brand" href="#" style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "verdana" }}>
          <FontAwesomeIcon icon={faProjectDiagram} />
          &nbsp; PROJECT MANAGMENT TOOL
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item " style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}>
              <Link className="nav-link active" to="/dashboard">
                <FontAwesomeIcon icon={faHome} /> &nbsp;DASHBOARD
              </Link>
            </li>
            <li className="nav-item active" style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}>
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faUserPlus} /> &nbsp;SIGNUP <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active" style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}>
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
                &nbsp; LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
