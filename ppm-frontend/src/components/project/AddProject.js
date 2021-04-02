import React, { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../addproject.css";

import { createProject } from "../../actions/projectAction";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectIdentifier, setProjectIdentifier] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [_errors, setErrors] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  useEffect(() => {
    if (errors) setErrors(errors);
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      projectName: projectName,
      projectIdentifier: projectIdentifier,
      description: description,
      start_date: start_date,
      end_date: end_date,
    };

    dispatch(createProject(newProject, history));
  };

  return (
    <div style={{ paddingTop: "20px", background: "white" }}>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">
              <strong>Create</strong> Project.
            </h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Project Name"
                name="projectName"
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                value={projectName}
              />

              <p className="text-left text-danger" style={{ fontSize: "14px" }}>
                {_errors.projectName}
              </p>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm "
                placeholder="Unique Project ID"
                name="projectIdentifier"
                onChange={(e) => {
                  setProjectIdentifier(e.target.value);
                }}
                value={projectIdentifier}
              />
              <p className="text-left text-danger" style={{ fontSize: "14px" }}>
                {_errors.projectIdentifier}
              </p>
            </div>
            <div className="form-group">
              <textarea
                className="form-control form-control-sm "
                placeholder="Project Description"
                name="description"
                cols="100"
                rows="15"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
              <p className="text-left text-danger" style={{ fontSize: "14px" }}>
                {_errors.description}
                &nbsp;
              </p>
            </div>
            <h6 className="text-left">Start Date</h6>
            <div className="form-group">
              <input
                type="date"
                className="form-control form-control-sm "
                placeholder="Start Date"
                name="start_date"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                value={start_date}
              />
            </div>
            <h6 className="text-left">Estimated End Date</h6>
            <div className="form-group">
              <input
                type="date"
                className="form-control form-control-sm "
                name="end_date"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                value={end_date}
              />
            </div>
            <br></br>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                ADD PROJECT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
