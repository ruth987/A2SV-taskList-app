import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from './taskSlice';

interface EditTaskProps {
    id : string;
    currentTitle : string;
    currentContent : string;
    onCancel : () => void;
        
}

const EditTask:React.FC<EditTaskProps> = ({id, currentTitle, currentContent, onCancel}) => {

    const [newTitle, setNewTitle] = useState<string>(currentTitle)
    const [newContent, setNewContent] = useState<string>(currentContent)

    const dispatch= useDispatch()

    const handleEdit = () => {
        dispatch(editTask({id, title: newTitle, content: newContent}))
        onCancel()
    }

  return (
    <div>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
      <button onClick={handleEdit}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default EditTask
