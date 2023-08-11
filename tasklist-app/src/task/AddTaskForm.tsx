import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from './taskSlice'


const AddTaskForm: React.FC = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const handleAddTask = () => {
        if (title && content){
            dispatch(addTask({title, content}))
            setTitle("")
            setContent("")

        }

    }

  return (
    <div>
        <input 
            type = "text"
            placeholder = "Add a task title"
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}    

        />
        <textarea 
            placeholder = "Add a task description"
            value = {content}
            onChange = {(e) => setContent(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      
    </div>
  )
}

export default AddTaskForm
