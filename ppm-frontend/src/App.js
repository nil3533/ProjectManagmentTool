import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/project/AddProject";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./store";

import { UpdateProject } from "./components/project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import Register from "./components/Register";
import jwt_decode from "jwt-decode";
import setJWT from "./securityUtils/setJWT";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecureRoute from "./securityUtils/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWT(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header></Header>

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <SecureRoute exact path="/addProject" component={AddProject} />
            <SecureRoute exact path="/updateProject/:p_id" component={UpdateProject} />
            <SecureRoute exact path="/dashboard" component={Dashboard} />
            <SecureRoute exact path="/projectBoard/:p_id" component={ProjectBoard} />
            <SecureRoute exact path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask} />
            <SecureRoute exact path="/createProjectTask/:p_id" component={AddProjectTask} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
