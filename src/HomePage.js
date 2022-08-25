import React from "react";
import "./HomePage.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>
        <b>Monday,</b> 1st Dec
      </h1>

      <div className="date">
        <div className="dates">
          <h3>06</h3>
          <p>Task Created</p>
        </div>

        <div className="dates">
          <h3 className="no3">03</h3>
          <p>Completed Task</p>
        </div>
      </div>

      <div className="tasks-coverall">
        <div className="tasks">
          <div className="task-flex">
            <input type="radio" />
            <p> Take a trash out</p>
          </div>
          <RestoreFromTrashIcon className="delete" />
        </div>
        <div className="tasks">
          <div className="task-flex">
            <input type="radio" />
            <p> Clean up the garage</p>
          </div>
          <RestoreFromTrashIcon className="delete" />
        </div>
        <div className="tasks">
          <div className="task-flex">
            <input type="radio" />
            <p> Prep for picnic</p>
          </div>
          <RestoreFromTrashIcon className="delete"/>
        </div>
        <div className="tasks">
          <div className="task-flex">
            <input type="radio" />
            <p> Take the kids to school</p>
          </div>
          <RestoreFromTrashIcon className="delete" />
        </div>
      </div>
      <AddCircleIcon className="add-icon"/>
    </div>
  );
};

export default HomePage;
