import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useHistory, useParams } from "react-router-dom";
import "../../updateproject.css";
import API from "../../../src/AxiosService";
import { createProject } from "../../actions/projectAction";

export const UpdateProject = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const _project = useSelector((state) => state.project);
  const { project } = _project;
  const { p_id } = useParams();
  const [_errors, setErrors] = useState({});
  const errors = useSelector((state) => state.errors);
  const [projectParams, setProjectParams] = useState({
    id: "",
    projectName: "",
    projectIdentifier: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    getProject(p_id);
  }, [p_id]);

  const getProject = (p_id) => {
    API.getProject(p_id).then((result) => {
      setProjectParams(result.data);
    });
  };

  useEffect(() => {
    if (errors) setErrors(errors);
  }, [errors]);

  console.log(project);
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setProjectParams({ ...projectParams, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateProject = {
      id: projectParams.id,
      projectName: projectParams.projectName,
      projectIdentifier: projectParams.projectIdentifier,
      description: projectParams.description,
      start_date: projectParams.start_date,
      end_date: projectParams.end_date,
    };

    dispatch(createProject(updateProject, history));
  };

  return (
    <div style={{ paddingTop: "20px", background: "white" }}>
      {
        <div className="register-photo1">
          <div className="form-container">
            <div className="image-holder"></div>
            <form onSubmit={handleSubmit}>
              <h2 className="text-center">
                <strong>Update</strong> Project.
              </h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-sm "
                  placeholder="Project Name"
                  name="projectName"
                  onChange={inputEvent}
                  value={projectParams.projectName}
                />
              </div>
              <p className="text-left text-danger" style={{ fontSize: "14px" }}>
                {_errors.projectName}
              </p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-sm "
                  placeholder="Unique Project ID"
                  name="projectIdentifier"
                  value={projectParams.projectIdentifier}
                  onChange={inputEvent}
                  disabled
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control form-control-sm text-area"
                  placeholder="Project Description"
                  name="description"
                  cols="100"
                  rows="20"
                  onChange={inputEvent}
                  value={projectParams.description}
                />
              </div>
              <p className="text-left text-danger" style={{ fontSize: "14px" }}>
                {_errors.description}
              </p>
              <h6 className="text-left">Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-sm "
                  placeholder="Start Date"
                  name="start_date"
                  onChange={inputEvent}
                  value={projectParams.start_date}
                />
              </div>
              <h6 className="text-left">Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-sm "
                  name="end_date"
                  onChange={inputEvent}
                  value={projectParams.end_date}
                />
              </div>
              <br></br>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
};
