import React, { useEffect, useState } from "react";
import ProjectItem from "./project/ProjectItem";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../actions/projectAction";
import CreateProjectButton from "./project/CreateProjectButton";

const Dashboard = () => {
  const dispatch = useDispatch();
  const _projectList = useSelector((state) => state.project);
  const { projects } = _projectList;

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
      <h1>Project Item</h1>
      <h1>Welcome to dashboard</h1>
      <div style={{ paddingRight: "990px" }}>
        <CreateProjectButton></CreateProjectButton>
      </div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project}></ProjectItem>
      ))}
    </div>
  );
};

export default Dashboard;
