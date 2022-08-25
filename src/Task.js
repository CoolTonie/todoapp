import React from "react";
import "./Task.css";

const Task = () => {
  return (
    <div className="task">
      <h1>TODO LIST</h1>

      <div className="content">
        <label> Title: </label> <br/>
        <input type="text" placeholder="Add Title" />
        <br />
        <label>Task Description:</label> <br/>
        <input
          type="text"
          placeholder="input your task here"
          class="task-info"
        />
      </div>
        <div className="dates">
      <div>
      <label> Start Date:</label> <br/>
      <input type='date' value= '00/00/0000' className="dating" />
      </div>
      <div>
      <label> End Date:</label> <br/>
      <input type='date' value= '00/00/0000' className="dating"/>
      </div>
      </div>
    </div>
  );
};

export default Task;
