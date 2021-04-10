import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { login } from "../actions/securityActions";
import { Link } from "react-router-dom";

const Login = () => {
  const [_errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const _security = useSelector((state) => state.security);

  const [state, setstate] = useState({
    username: "",
    password: "",
    errors: {},
  });

  useEffect(() => {
    if (errors) setErrors(errors);

    if (_security.validToken) {
      history.push("/dashboard");
    }
  }, [errors, _security.validToken, history]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    if (value !== null || value !== "") {
      setErrors({});
    }
    setstate({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(state, history));
  };

  return (
    <div style={{ paddingTop: "20px", background: "white" }}>
      <div className="register-photo-div">
        <div className="form-container">
          <div className="image-div"></div>
          <form onSubmit={handleSubmit}>
            <h2 className="text-left">
              <strong></strong> Sign into your account
            </h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm "
                placeholder="Enter Name"
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
                className="form-control form-control-sm "
                placeholder="Enter Password"
                name="password"
                onChange={inputEvent}
                value={state.password}
              />
            </div>
            <p className="text-left text-danger" style={{ fontSize: "14px" }}>
              {_errors.password}
            </p>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                LOGIN
              </button>
            </div>

            <p className=" text-left">
              Don't have an account?{" "}
              <Link to="/register" className="text-reset">
                Register here
              </Link>
            </p>
            <hr></hr>
            <p id="text2">or login with</p>
            <div className="col">
              <a href="/" className="fb btn btn-block">
                <FontAwesomeIcon icon={faFacebookF} /> &nbsp; Login with Facebook
              </a>

              <a href="/" className="google btn">
                <FontAwesomeIcon icon={faGoogle} /> &nbsp; Login with Google+
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
