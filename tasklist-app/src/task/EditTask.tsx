import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './taskSlice';

interface EditTaskProps {
  id: string;
  currentTitle: string;
  currentContent: string;
  onCancel: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({
  id,
  currentTitle,
  currentContent,
  onCancel,
}) => {
  const [newTitle, setNewTitle] = useState<string>(currentTitle);
  const [newContent, setNewContent] = useState<string>(currentContent);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id, title: newTitle, content: newContent }));
    onCancel();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <input
        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:border-green-500"
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        className="w-full px-4 py-2 mb-4 border rounded resize-none focus:outline-none focus:border-green-500"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <div className="flex justify-end space-x-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          onClick={handleEdit}
        >
          Save
        </button>
        <button
          className="bg-gray-300 text-gray-600 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
