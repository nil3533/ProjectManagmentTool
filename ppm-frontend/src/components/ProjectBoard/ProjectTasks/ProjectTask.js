import React from "react";
import { faTrashAlt, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProjectTask } from "../../../actions/backLogActions";

const ProjectTask = (props) => {
  const dispatch = useDispatch();
  const { pt } = props;

  let projectSummary, acceptenceCriteria, projectSequence;
  let priorityString;
  let priorityClass;

  if (pt.priority === 1) {
    priorityClass = "alert-danger text-danger ";
    priorityString = "HIGH";
  }
  if (pt.priority === 2) {
    priorityClass = "alert-primary text-primary ";
    priorityString = "MEDIUM";
  }
  if (pt.priority === 3) {
    priorityClass = "alert-info text-info ";
    priorityString = "LOW";
  }

  if (pt !== undefined) {
    projectSummary = pt.summary;
    acceptenceCriteria = pt.acceptanceCriteria;
    projectSequence = pt.projectSequence;
  }

  function fncDeleteProjectTask(projectIdentifier, projectSequence) {
    dispatch(deleteProjectTask(projectIdentifier, projectSequence));
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-10 offset-md-1 ">
          <div className="card ">
            <div
              className={`card-header text-left ${priorityClass}`}
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                fontFamily: "verdana",
              }}
            >
              ID: {projectSequence} -- Priority: {priorityString}
            </div>
            <div className="card-body">
              <div style={{ float: "left" }}>
                <span className="pt-span-hd">{projectSummary} </span>

                <br></br>
                <span className="pt-span">{acceptenceCriteria}</span>
              </div>
              <br></br>
              <div style={{ float: "right", paddingTop: "10px" }}>
                <Link
                  href="#"
                  to={`/updateProjectTask/${pt.projectIdentifier}/${pt.projectSequence}`}
                  className="btn btn-light "
                  style={{
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: "verdana",
                    color: "darkblue",
                  }}
                >
                  <FontAwesomeIcon icon={faList} />
                  &nbsp; VIEW / UPDATE
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="#"
                  className="btn btn-light"
                  style={{
                    fontSize: "9px",
                    fontWeight: "bold",
                    fontFamily: "verdana",
                    color: "red",
                  }}
                  onClick={(e) => fncDeleteProjectTask(pt.projectIdentifier, pt.projectSequence)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                  &nbsp; DELETE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ProjectTask;
