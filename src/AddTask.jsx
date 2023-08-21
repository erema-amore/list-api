import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container } from '@material-ui/core';
import { addTask } from './taskSlice';

function AddTask() {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (taskTitle) {
      dispatch(addTask({ id: Date.now(), title: taskTitle }));
      setTaskTitle('');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Add Task
        </Button>
      </form>
    </Container>
  );
}

export default AddTask;
