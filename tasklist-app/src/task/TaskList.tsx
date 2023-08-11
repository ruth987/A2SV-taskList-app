import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../app/store'
import {toggleCompleted, deleteTask, editTask} from './taskSlice'
import {Task} from './taskSlice'
import EditTask from './EditTask'

const TaskList: React.FC = () => {

    const tasks = useSelector((state: RootState) => state.task.tasks)
    const dispatch = useDispatch()
    const [editingTask, setEditingTask] = useState<string| null>(null)

    const handleEditClick = (taskId: string) => {
        setEditingTask(taskId)
    }

    const handleCancelClick = () => {
        setEditingTask(null)
    }

  return (
    <div>
        <ul>
            {
                tasks.map((task : Task)=>(
                    <li key={task.id}>
                        {
                            editingTask == task.id ?(
                                <EditTask 
                                    id = {task.id}
                                    currentTitle = {task.title}
                                    currentContent = {task.content}
                                    onCancel = {handleCancelClick}
                                />
                            ) : (
                                <>
                                    <input 
                                        type="checkbox" 
                                        checked={task.completed} 
                                        onChange={() => dispatch(toggleCompleted(task.id))}
                                    />
                                    <span>{task.title}</span>
                                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                                    <button onClick={() => handleEditClick(task.id)}>Edit</button>
                                </>
                            )
                        }
                    </li>
                )
                )}
        </ul>
      
    </div>
  )
}

export default TaskList
