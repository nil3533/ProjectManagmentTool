import React from "react";
import { Link } from "react-router-dom";
import { faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {
  return (
    <div>
      <div
        class="container"
        style={{
          height: "100px",
          marginTop: "300px",
          padding: "20px",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease 0s",
        }}
      >
        <div class="row">
          <div class="col-sm text-right" style={{ fontSize: "40px", float: "left" }}>
            Project Managment Tool
          </div>

          <div class="col-sm">
            <div class="btn-group mr-2" role="group" aria-label="Basic example" style={{ margin: "5px" }}>
              <Link
                className="btn btn-light text-primary "
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
            <div class="btn-group mr-2" role="group" aria-label="Basic example" style={{ margin: "5px" }}>
              <Link
                className="btn btn-light text-primary "
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
