import React, { useState } from 'react';
import '../stylesheets/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault(); // Prevents website to reload when submitting form

    const newTask = {
      id: uuidv4(), // Generates a random Id
      text: input,
      completed: false
    };

    props.onSubmit(newTask);

  };

  return (
    <form 
      className='task-form'
      onSubmit={handleSubmit}>
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;