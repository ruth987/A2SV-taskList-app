import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../app/store'
import { toggleFilter } from './taskSlice'

const FilterButton = () => {

    const filter = useSelector((state: RootState) => state.task.filter)
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(toggleFilter())}>
                {filter ? 'Show All Tasks' : 'Show Completed Tasks'}
            </button>
        </div>
    )
}

export default FilterButton
