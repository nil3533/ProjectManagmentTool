import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
const Login = () => {
  return (
    <div style={{ paddingTop: "20px", background: "white" }}>
      <div className="register-photo-div">
        <div className="form-container">
          <div className="image-div"></div>
          <form method="post">
            <h2 className="text-left">
              <strong></strong> Sign into your account
            </h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm "
                placeholder="Enter Name"
                name="username"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-sm "
                placeholder="Enter Password"
                name="password"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                LOGIN
              </button>
            </div>

            <p className=" text-left">
              Don't have an account?{" "}
              <a href="#!" class="text-reset">
                Register here
              </a>
            </p>
            <hr></hr>
            <p id="text2">or login with</p>
            <div className="col">
              <a href="#" className="fb btn btn-block">
                <FontAwesomeIcon icon={faFacebookF} /> &nbsp; Login with Facebook
              </a>

              <a href="#" className="google btn">
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
