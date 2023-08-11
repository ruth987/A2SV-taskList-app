import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const AddTaskForm: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleAddTask = () => {
    if (title && content) {
      dispatch(addTask({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Add a New Task</h3>
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 rounded border focus:outline-none focus:border-green-500"
          type="text"
          placeholder="Add a task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full px-4 py-2 rounded border resize-none focus:outline-none focus:border-green-500"
          placeholder="Add a task description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
