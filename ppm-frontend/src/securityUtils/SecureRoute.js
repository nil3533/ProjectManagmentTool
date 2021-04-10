import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const SecureRoute = ({ component: Component, ...otherProps }) => {
  const _security = useSelector((state) => state.security);
  return (
    <Route {...otherProps} render={(props) => (_security.validToken === true ? <Component {...props} /> : <Redirect to="/login" />)} />
  );
};

export default SecureRoute;
