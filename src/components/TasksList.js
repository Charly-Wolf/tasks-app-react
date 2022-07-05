import React, { useState } from 'react';
import '../stylesheets/TasksList.css'
import TaskForm from './TaskForm';
import Task from '../components/Task';

const TasksList = () => {
  
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task)
    if (task.text.trim()) { // Check text string is not empty
      task.text = task.text.trim(); // Trim eliminates blank spaces at the beginning and end of the text string
      const updatedTasks = [task, ...tasks]; // ... (spread operator) = converts the tasks array to individual objects
      setTasks(updatedTasks); 
    }
  };
  
const deleteTask = id => {
  const updatedTasks = tasks.filter(task => task.id !== id); // Create new array (updatedTasks) and check each task in the state (tasks). For each task there, check the id, if the id is the same as the id to be deleted, don't include that task in the updatedTasks array.
  setTasks(updatedTasks);
};

const completeTask = id => {
  const updatedTasks = tasks.map(task => { // A new tasks array (updatedTasks) will be returned after applying the .map() method
    if (task.id === id) {
      task.completed = !task.completed; // If the task was completed, then now is not. And viceversa.
    }
    return task;
  });
  setTasks(updatedTasks);
};

  return (
    <>
      <TaskForm onSubmit={addTask}/>
      <div className='tasks-list-container'>
        {
          tasks.map((task) => 
            <Task 
              key={task.id} // With the key (which is not a prop) React can identify each task as a unique element
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
      </div>
    </>
  );
};

export default TasksList;