import { useState, useEffect } from 'react';
import { createTask, deleteTask, getTasks } from './api/services/task.service';
import Input from './components/Input';
import Tasks from './components/Task';
import { ITask } from './types/task.types';


function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([])
  const [task, setTask] = useState<ITask>({
    name: ''
  })
  const [mounted, setMounted] = useState(true)

  const onTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let task: ITask = {
      name: e.target.value
    }

		setTask(task)
	}

  const addTask = (taskName: string) => {
    createTask(taskName).then(response => {
      setTasks([
        ...tasks,
        response.data,
      ])
  
      setTask({
        name: ''
      })
    })
	}

  const removeTask = (id: number) => {
    deleteTask(id).then(() => {
      let ts = tasks.filter((task) => {
        return task.id !== id
      })

      setTasks(ts)
    })
  }

  useEffect( () => {
    getTasks().then(response => {
      if(mounted) {
        console.log(response.data)
        setTasks(response.data)
        setMounted(false)
      }
    }).catch(error => console.log(error))
  });

  return (
    <div className="mx-auto w-screen h-screen flex flex-col justify-center items-center">
      <Input task={ task } onTaskChange={ onTaskChange } addTask={ addTask }></Input>
      <Tasks tasks={tasks} removeTask={ removeTask }></Tasks>
    </div>

  );
}

export default App;
