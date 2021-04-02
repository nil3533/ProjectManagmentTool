import React from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <Link
      to="/addProject"
      className="btn btn-warning"
      style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "verdana" }}
    >
      <FontAwesomeIcon icon={faPlusSquare} />
      &nbsp; CREATE PROJECT
    </Link>
  );
};

export default CreateProjectButton;
