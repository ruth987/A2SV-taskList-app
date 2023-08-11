import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleFilter } from './taskSlice';

const FilterButton = () => {
  const filter = useSelector((state: RootState) => state.task.filter);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(toggleFilter())}
        className="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition duration-300 my-5"
      >
        {filter ? 'Show All Tasks' : 'Show Completed Tasks'}
      </button>
    </div>
  );
};

export default FilterButton;
