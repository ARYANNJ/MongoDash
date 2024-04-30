import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { AddCircleOutline, Delete } from '@mui/icons-material';

const TodoList=()=>{
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ margin: '20px' }}>
      <TextField
      sx={{background:"rgb(253,207,104)",width:"300px",marginLeft:"26px"}}
        label="what do You Want to Accomplish today?"
        size="small"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button
        variant="contained"
        sx={{background:"black",height:"40px",width:"10px",marginLeft:"5px"}}
        onClick={addTask}
      >
       <h3>+</h3>
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => deleteTask(index)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
