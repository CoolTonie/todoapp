import React, { useState } from "react";
import "./Task.css";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [values, setValues] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = () => {
    // spread operator
    setTasks((prevState) => [values, ...prevState]);
    setValues({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="task">
      <h1>TODO LIST</h1>

      <div className="content">
        <label htmlFor="title"> Title: </label> <br />
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          value={values.title}
          onChange={(e) => {
            setValues((prevState) => ({ ...prevState, title: e.target.value }));
          }}
        />
        <br />
        <label htmlFor="description">Task Description:</label> <br />
        <input
          type="text"
          placeholder="input your task here"
          className="task-info"
          name="description"
          value={values.description}
          onChange={(e) =>
            setValues((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />
      </div>
      <div className="dates">
        <div>
          <label> Start Date:</label> <br />
          <input
            type="date"
            value={values.startDate}
            className="dating"
            onChange={(e) =>
              setValues((prevState) => ({
                ...prevState,
                startDate: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label> End Date:</label> <br />
          <input
            type="date"
            value={values.endDate}
            className="dating"
            onChange={(e) =>
              setValues((prevState) => ({
                ...prevState,
                endDate: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>

      <div>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <p>Title: {task.title}</p>
              <p>Desc: {task.description}</p>
              <p>Start Date: {task.startDate}</p>
              <p>End Date: {task.endDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
