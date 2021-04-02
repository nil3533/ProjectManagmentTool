import React from "react";
import { faTrashAlt, faPenAlt, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { deleteProject } from "../../actions/projectAction";
import { useDispatch, useSelector } from "react-redux";

const ProjectItem = (props) => {
  const dispatch = useDispatch();

  function deleteProject1(id) {
    alert(id);
    dispatch(deleteProject(id));
  }

  return (
    <div>
      <br></br>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div
              class="card-header text-left"
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                fontFamily: "verdana",
                color: "gray",
              }}
            >
              {props.project.projectName}
              &nbsp;&nbsp;({props.project.projectIdentifier})
            </div>
            <div className="card-body">
              <div style={{ float: "left" }}>
                <span>START DATE (YYYY-MM-DD) : </span>
                <span>{props.project.start_date}</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>END DATE (YYYY-MM-DD): </span>
                <span>{props.project.start_date}</span>
              </div>
              <br></br>
              <div style={{ float: "left" }}>
                <span style={{ fontSize: "11px", fontFamily: "verdana" }}>
                  {props.project.description}
                </span>
              </div>
              <br></br>
              <br></br>

              <div style={{ float: "left" }}>
                <a
                  className="btn btn-light "
                  style={{
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: "verdana",
                    color: "darkblue",
                  }}
                >
                  <FontAwesomeIcon icon={faList} />
                  &nbsp; PROJECT BOARD
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  to={`/updateProject/${props.project.projectIdentifier}`}
                  className="btn btn-light "
                  style={{
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: "verdana",
                    color: "crimson",
                  }}
                >
                  <FontAwesomeIcon icon={faPenAlt} />
                  &nbsp; UPDATE PROJECT INFO
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  className="btn btn-light"
                  style={{
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: "verdana",
                    color: "red",
                  }}
                  onClick={(e) => deleteProject1(props.project.projectIdentifier)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                  &nbsp; DELETE PROJECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
