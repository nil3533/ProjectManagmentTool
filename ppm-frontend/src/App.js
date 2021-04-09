import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/project/AddProject";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./store";

import { UpdateProject } from "./components/project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header></Header>

          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/addProject" component={AddProject}></Route>
          <Route exact path="/updateProject/:p_id" component={UpdateProject}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/projectBoard/:p_id" component={ProjectBoard}></Route>
          <Route exact path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask} />
          <Route exact path="/createProjectTask/:p_id" component={AddProjectTask} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
