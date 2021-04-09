import React from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card">
          <div className="card-body text-left">
            <Link
              to="/addProject"
              className="btn btn-warning"
              style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "verdana" }}
            >
              <FontAwesomeIcon icon={faPlusSquare} />
              &nbsp; CREATE PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectButton;
