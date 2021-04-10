import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Landing = () => {
  const _security = useSelector((state) => state.security);
  const history = useHistory();

  useEffect(() => {
    if (_security.validToken) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{
          height: "100px",
          marginTop: "300px",
          padding: "20px",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease 0s",
        }}
      >
        <div className="row">
          <div className="col-sm text-right" style={{ fontSize: "40px", float: "left" }}>
            Project Managment Tool
          </div>

          <div className="col-sm">
            <div className="btn-group mr-2" role="group" aria-label="Basic example" style={{ margin: "5px" }}>
              <Link
                to="/register"
                className="btn btn-primary text-light "
                style={{
                  fontSize: "14px",
                  fontFamily: "verdana",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <FontAwesomeIcon icon={faUser} /> Sign Up
              </Link>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Basic example" style={{ margin: "5px" }}>
              <Link
                to="/login"
                className="btn btn-primary text-light "
                style={{
                  fontSize: "14px",
                  fontFamily: "verdana",
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <FontAwesomeIcon icon={faSignInAlt} />
                &nbsp; Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
