import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/project/AddProject";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./store";
import { Footer } from "./Footer";
import { UpdateProject } from "./components/project/UpdateProject";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header></Header>

          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/addProject" component={AddProject}></Route>
          <Route exact path="/updateProject/:p_id" component={UpdateProject}></Route>
          <Route exact path="/login" component={Login}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
