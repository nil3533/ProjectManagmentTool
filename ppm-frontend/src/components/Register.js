import React, { useState, useEffect } from "react";
import { createNewUser } from "../actions/securityActions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [_errors, setErrors] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const [state, setstate] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });

  useEffect(() => {
    if (errors) setErrors(errors);
  }, [errors]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    if (value !== null || value !== "") {
      setErrors({});
    }
    setstate({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewUser(state, history));
  };

  return (
    <div style={{ paddingTop: "20px", background: "white" }}>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">
              <strong>Create</strong> ACCOUNT.
            </h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Name"
                name="fullName"
                onChange={inputEvent}
                value={state.fullName}
              />
            </div>
            <p className="text-left text-danger" style={{ fontSize: "14px" }}>
              {_errors.fullName}
            </p>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Email Address"
                name="username"
                onChange={inputEvent}
                value={state.username}
              />
            </div>
            <p className="text-left text-danger" style={{ fontSize: "14px" }}>
              {_errors.username}
            </p>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-sm"
                placeholder="Password"
                name="password"
                onChange={inputEvent}
                value={state.password}
              />
            </div>
            <p className="text-left text-danger" style={{ fontSize: "14px" }}>
              {_errors.password}
            </p>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-sm"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={inputEvent}
                value={state.confirmPassword}
              />
            </div>
            <p className="text-left text-danger" style={{ fontSize: "14px" }}>
              {_errors.confirmPassword}
            </p>
            <br></br>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
