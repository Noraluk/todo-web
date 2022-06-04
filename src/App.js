import { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from './api/services/task';
import './App.css';
import Input from './components/Input';
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')

	const onTaskChange = ({target : {value}}) => {
		setTask(value)
	}

  const addTask = (task) => {
    createTask(task).then(response => {
      setTasks([
        ...tasks,
        response.data,
      ])
  
      setTask('')
    })
	}

  const removeTask = (index) => {
    deleteTask(index).then(() => {
      let ts = tasks.filter((task) => {
        return task.id !== index
      })

      setTasks(ts)
    })
  }

  useEffect( () => {
    let mounted = true;
    getTasks().then(response => {
      console.log(response.data)
      if(mounted) {
        setTasks(response.data)
      }
    }).catch(error => console.log(error))
    
    return () => mounted = false;
  },[]);

  return (
    <div className="App">
      <Input task={ task } onTaskChange={ onTaskChange } addTask={ addTask }></Input>
      <Task tasks={tasks} removeTask={removeTask}></Task>
    </div>
  );
}

export default App;
