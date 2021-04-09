import http from "../src/axios-common";

const getProject = (id) => {
  return http.get(`/project/${id}`);
};

const getProjectTask = (backlog_id, pt_id) => {
  return http.get(`/backlog/${backlog_id}/${pt_id}`);
};

export default { getProject, getProjectTask };
