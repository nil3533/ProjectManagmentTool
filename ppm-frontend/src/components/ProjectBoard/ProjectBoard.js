import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCheckCircle, faExclamationTriangle, faPlusSquare, faSpinner, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import BackLog from "./BackLog";
import { useDispatch, useSelector } from "react-redux";
import { getBacklog } from "../../actions/backLogActions";
import ProjectTask from "./ProjectTasks/ProjectTask";

const ProjectBoard = () => {
  const { p_id } = useParams();
  const dispatch = useDispatch();
  const backLogs = useSelector((state) => state.backlog);
  const { project_tasks } = backLogs;
  const [_status, setStatus] = useState("ALL");

  const [_errors, setErrors] = useState({});
  const errors = useSelector((state) => state.errors);

  const rows = [];
  let lastStatus = null;

  useEffect(() => {
    dispatch(getBacklog(p_id));
  }, [dispatch]);

  useEffect(() => {
    if (errors) setErrors(errors);
  }, [errors]);

  if (project_tasks.length < 1) {
    if (errors.projectNotFound) {
      rows.push(
        <div className="row">
          <div className="col-md-10 offset-md-1 ">
            <div className="card">
              <div
                className="card-header text-left alert-danger text-danger"
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "verdana",
                }}
              >
                <FontAwesomeIcon icon={faExclamationTriangle} />
                &nbsp;&nbsp;
                {errors.projectNotFound}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      rows.push(
        <div className="row">
          <div className="col-md-10 offset-md-1 ">
            <div className="card">
              <div
                className="card-header text-left alert-info text-info"
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "verdana",
                  color: "gray",
                }}
              >
                No Project Task is found.
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  project_tasks.map((pt) => {
    if (_status === "ALL") {
      if (pt.status !== lastStatus) {
        rows.push(<BackLog pt_status={pt.status}></BackLog>);
      }
      lastStatus = pt.status;
      rows.push(<ProjectTask pt={pt} key={pt.id}></ProjectTask>);
    } else {
      if (pt.status !== lastStatus) {
        if (pt.status === _status) {
          rows.push(<BackLog pt_status={pt.status}></BackLog>);
        }
      }
      lastStatus = pt.status;
      if (_status === lastStatus) {
        rows.push(<ProjectTask pt={pt} key={pt.id}></ProjectTask>);
      }
    }
  });

  return (
    <div style={{ paddingTop: "50px" }}>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-2">
            <div className="card " style={{ width: "18rem" }}>
              <Link
                to={`/createProjectTask/${p_id}`}
                className="btn btn-light text-left"
                style={{
                  color: "#007bff",
                  fontSize: "10px",
                  fontWeight: "bold",
                  fontFamily: "Verdana",
                }}
              >
                <FontAwesomeIcon icon={faPlusSquare} />
                &nbsp; CREATE PROJECT TASK
              </Link>
            </div>
            <br></br>
            <div className="card" style={{ width: "18rem" }}>
              <div
                className="card-header border-0 text-left"
                style={{
                  color: "#007bff",
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "Verdana",
                }}
              >
                PROJECT STATUS
              </div>
              <ul
                className="list-group list-group-flush"
                style={{
                  color: "#007bff",
                  fontSize: "10px",
                  fontWeight: "bold",
                  fontFamily: "Verdana",
                }}
              >
                <li
                  href="#"
                  onClick={() => setStatus("ALL")}
                  className="list-group-item text-left "
                  style={{ cursor: "pointer", backgroundColor: "white" }}
                >
                  ALL
                </li>
                <li
                  href="#"
                  onClick={() => setStatus("TO_DO")}
                  className="list-group-item text-left"
                  style={{ cursor: "pointer", backgroundColor: "white" }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faThList} /> &nbsp;TO DO
                </li>
                <li
                  href="#"
                  onClick={() => setStatus("IN_PROGRESS")}
                  className="list-group-item text-left"
                  style={{ cursor: "pointer", backgroundColor: "white" }}
                >
                  <FontAwesomeIcon icon={faSpinner} />
                  &nbsp;IN PROGRESS
                </li>
                <li
                  href="#"
                  onClick={() => setStatus("DONE")}
                  className="list-group-item text-left"
                  style={{ cursor: "pointer", backgroundColor: "white" }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                  &nbsp;COMPLETE
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 ">{rows}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBoard;
