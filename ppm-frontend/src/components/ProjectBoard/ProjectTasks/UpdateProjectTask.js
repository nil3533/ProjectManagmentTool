import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProjectTask, updateProjectTask } from "../../../actions/backLogActions";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateProjectTask = () => {
  const { pt_id, backlog_id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [_errors, setErrors] = useState({});
  const errors = useSelector((state) => state.errors);
  const _project = useSelector((state) => state.backlog);
  const { project_task } = _project;

  const [projectTaskParams, setProjectTaskParams] = useState({
    id: "",
    projectSequence: "",
    summary: "",
    acceptanceCriteria: "",
    status: "",
    priority: "",
    dueDate: "",
    projectIdentifier: "",
    create_At: "",
    errors: {},
  });

  useMemo(() => {
    setProjectTaskParams(project_task);
  }, [project_task]);

  useEffect(() => {
    dispatch(getProjectTask(backlog_id, pt_id, history));
  }, [backlog_id, pt_id, history]);

  //   const getProjectTask = (backlog_id, p_id) => {
  //     API.getProjectTask(backlog_id, p_id).then((result) => {
  //       setProjectTaskParams(result.data);
  //     });
  //   };

  useEffect(() => {
    if (errors) setErrors(errors);
  }, [errors]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    if (value !== null || value !== "") {
      setErrors({});
    }
    setProjectTaskParams({ ...projectTaskParams, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateProject = {
      id: projectTaskParams.id,
      projectSequence: projectTaskParams.projectSequence,
      summary: projectTaskParams.summary,
      acceptanceCriteria: projectTaskParams.acceptanceCriteria,
      status: projectTaskParams.status,
      priority: projectTaskParams.priority,
      dueDate: projectTaskParams.dueDate,
      projectIdentifier: projectTaskParams.projectIdentifier,
      create_At: projectTaskParams.create_At,
    };

    dispatch(updateProjectTask(projectTaskParams.projectIdentifier, projectTaskParams.projectSequence, updateProject, history));
  };

  return (
    <div>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">
              <strong>Update</strong> Project Task
            </h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                name="summary"
                placeholder="Project Task summary"
                onChange={inputEvent}
                value={projectTaskParams.summary}
              />
            </div>
            <p className="text-left text-danger" style={{ fontSize: "14px" }}>
              {_errors.summary}
            </p>
            <div className="form-group">
              <textarea
                class="form-control form-control-sm"
                placeholder="Acceptance Criteria"
                name="acceptanceCriteria"
                onChange={inputEvent}
                value={projectTaskParams.acceptanceCriteria}
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="date"
                class="form-control form-control-sm"
                name="dueDate"
                onChange={inputEvent}
                value={projectTaskParams.dueDate}
              />
            </div>

            <div className="form-group">
              <select class="form-control form-control-sm" name="priority" onChange={inputEvent} value={projectTaskParams.priority}>
                <option value={0}>Select Priority</option>
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
              </select>
            </div>

            <div className="form-group">
              <select class="form-control form-control-sm" name="status" onChange={inputEvent} value={projectTaskParams.status}>
                <option value="">Select Status</option>
                <option value="TO_DO">TO DO</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="DONE">DONE</option>
              </select>
            </div>
            <br></br>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                CREATE PROJECT TASK
              </button>
            </div>
          </form>
        </div>
        <div className="back-button">
          <Link
            to={`/projectBoard/${pt_id}`}
            className="btn btn-light text-left"
            style={{
              fontSize: "9px",
              fontWeight: "bold",
              fontFamily: "verdana",
              color: "darkblue",
              top: "50px",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            &nbsp; PROJECT BOARD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProjectTask;
