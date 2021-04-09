import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCheckCircle, faPlusSquare, faSpinner, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import BackLog from "./BackLog";
import { useDispatch, useSelector } from "react-redux";
import { getBacklog } from "../../actions/backLogActions";
import ProjectTask from "./ProjectTasks/ProjectTask";
import { STATUS_ALL, STATUS_TODO, STATUS_INPROGRESS, STATUS_COMPLETE } from "../../actions/types";

const ProjectHead = (props) => {
  const { p_id } = useParams();
  const backLogs = useSelector((state) => state.backlog);
  const { project_tasks } = backLogs;
  const dispatch = useDispatch();
  const rows = [];
  let lastStatus = null;
  const [status, setStatus] = useState();
  useEffect(() => {
    dispatch(getBacklog(p_id));
  }, [dispatch]);

  project_tasks.map((pt) => {
    if (pt.status !== lastStatus) {
      console.log(lastStatus + pt.status);
      rows.push(<BackLog pt_status={pt.status}></BackLog>);
    }
    rows.push(<ProjectTask pt={pt} key={pt.id}></ProjectTask>);
    lastStatus = pt.status;
  });
  return (
    <div>
      <div className="col-md-2">
        <div className="card border-1" style={{ width: "18rem" }}>
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
            <li href="#" onClick={() => setStatus()} className="list-group-item text-left">
              ALL
            </li>
            <li href="#" onClick={() => setStatus("TO_DO")} className="list-group-item text-left">
              {" "}
              <FontAwesomeIcon icon={faThList} /> &nbsp;TO DO
            </li>
            <li href="#" onClick={() => setStatus("IN_PROGRESS")} className="list-group-item text-left">
              <FontAwesomeIcon icon={faSpinner} />
              &nbsp;IN PROGRESS
            </li>
            <li href="#" onClick={() => setStatus("COMPLETE")} className="list-group-item text-left">
              <FontAwesomeIcon icon={faCheckCircle} />
              &nbsp;COMPLETE
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectHead;
