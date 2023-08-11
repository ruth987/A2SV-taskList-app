import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleCompleted, deleteTask } from './taskSlice';
import { Task } from './taskSlice';
import EditTask from './EditTask';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => {
    if (state.task.filter) {
      return state.task.tasks.filter((task: Task) => task.completed);
    }
    return state.task.tasks;
  });
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState<string | null>(null);

  const handleEditClick = (taskId: string) => {
    setEditingTask(taskId);
  };

  const handleCancelClick = () => {
    setEditingTask(null);
  };

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <ul className="space-y-4 w-full max-w-md">
        {tasks.map((task: Task) => (
          <li
            key={task.id}
            className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
          >
            {editingTask === task.id ? (
              <EditTask
                id={task.id}
                currentTitle={task.title}
                currentContent={task.content}
                onCancel={handleCancelClick}
              />
            ) : (
              <>
                <div className="flex items-center space-x-4">
                  <button
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      task.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                    }`}
                    onClick={() => dispatch(toggleCompleted(task.id))}
                  >
                    {task.completed && (
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                  <div className="text-lg font-semibold">
                    {task.title}
                  </div>
                </div>
                <div className="text-gray-600">
                  {task.content}
                </div>
                <div className="flex space-x-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition duration-300"
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition duration-300"
                    onClick={() => handleEditClick(task.id)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
