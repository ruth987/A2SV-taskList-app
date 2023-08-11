import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface Task {
    id: string;
    title: string;
    content: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [{
        id: nanoid(),
        title: "First Task",
        content: "This is the first task.",
        completed: false,
    }],
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{title: string; content: string}>) => {
            const newTask: Task = {
                id: nanoid(),
                title: action.payload.title,
                content: action.payload.content,
                completed: false,
            };
            state.tasks.push(newTask);
            }, 
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);

        },
        toggleCompleted: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        editTask: (state, action: PayloadAction<{id: string; title: string; content: string}>) => {
            const task = state.tasks.find((task) => task.id === action.payload.id);
            if (task) {
                task.title = action.payload.title;
                task.content = action.payload.content;
            }
        }, 

            

    }
})

export const { addTask, deleteTask, toggleCompleted, editTask } = taskSlice.actions;

export default taskSlice.reducer;