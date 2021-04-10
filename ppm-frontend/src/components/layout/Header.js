import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faProjectDiagram, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { logout } from "../../actions/securityActions";

const Header = () => {
  const _security = useSelector((state) => state.security);
  const { validToken, user } = _security;
  const dispatch = useDispatch();

  function signout() {
    dispatch(logout());
    window.location.href = "/";
  }

  const isUserAuthenticated = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        {/* <li className="nav-item " style={{ fontSize: "12px", fontWeight: "bold", fontFamily: "verdana" }}>
          <Link className="nav-link active" to="/dashboard">
            <FontAwesomeIcon icon={faHome} /> &nbsp;DASHBOARD
          </Link>
        </li> */}
        <li className="nav-item active" style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}>
          <Link className="nav-link" to="/dashboard">
            <FontAwesomeIcon icon={faUserCircle} />
            &nbsp;{user.fullName} <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item active" style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}>
          <Link className="nav-link" to="/logout" onClick={signout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            &nbsp; LOGOUT
          </Link>
        </li>
      </ul>
    </div>
  );

  const userIsNotAuthenticated = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav ml-auto">
        <li className="nav-item active" style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}>
          <Link className="nav-link" to="/register">
            <FontAwesomeIcon icon={faUserPlus} /> &nbsp;SIGNUP <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item active" style={{ fontSize: "11px", fontWeight: "bold", fontFamily: "verdana" }}>
          <Link className="nav-link" to="/login">
            <FontAwesomeIcon icon={faSignInAlt} />
            &nbsp; LOGIN
          </Link>
        </li>
      </ul> */}
    </div>
  );

  let headerLinks;

  if (validToken && user) {
    headerLinks = isUserAuthenticated;
  } else {
    headerLinks = userIsNotAuthenticated;
  }
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "3000" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top" style={{ backgroundColor: "#e3f2fd" }}>
        <Link to="/" className="navbar-brand" href="#" style={{ fontSize: "14px", fontWeight: "bold", fontFamily: "verdana" }}>
          <FontAwesomeIcon icon={faProjectDiagram} />
          &nbsp; PROJECT MANAGMENT TOOL
        </Link>
        {headerLinks}
      </nav>
    </div>
  );
};

export default Header;
