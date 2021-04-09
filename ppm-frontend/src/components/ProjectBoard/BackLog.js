import React from "react";
import { faCheckCircle, faPlusSquare, faSpinner, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackLog = (props) => {
  const { pt_status } = props;

  let headerClass, icon;
  if (pt_status === "TO_DO") {
    headerClass = "text-info";
    icon = <FontAwesomeIcon icon={faThList} />;
  }
  if (pt_status === "IN_PROGRESS") {
    headerClass = "text-primary";
    icon = <FontAwesomeIcon icon={faSpinner} />;
  }
  if (pt_status === "DONE") {
    headerClass = "text-success";
    icon = <FontAwesomeIcon icon={faCheckCircle} />;
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-10 offset-md-1 ">
          <div className="card">
            <div
              className={`card-header text-left ${headerClass}`}
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                fontFamily: "verdana",
                color: "gray",
                background: "white",
              }}
            >
              {icon}&nbsp;&nbsp;
              {pt_status}
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default BackLog;
