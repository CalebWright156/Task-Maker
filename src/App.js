import Header from './components/header.js'
import Tasks from './components/tasks'
import AddTask from './components/addtask'
import { useState } from 'react'




function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Uni Assignment', 
    day: 'Sep 20 at 11:59pm',
    reminder: true,
},
{
    id: 2,
    text: 'Meetings at School', 
    day: 'Feb 6th at 1:30pm',
    reminder: true,
},
{
    id: 3,
    text: 'Food Shopping', 
    day: 'Feb 5th at 2:30pm',
    reminder: false,
},
])

//Add tasks
const addTasks = (task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete tasks
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task)) 
}


  return(
    <div className='container'>
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTasks}/>}
    {tasks.length > 0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 'No tasks to show'}
    </div>
  )
}

export default App;
