import { createSlice } from "@reduxjs/toolkit";



const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: []
    },

    reducers: {
        setAllTasks: (state, action) => {
            state.tasks = action.payload

        },
        addingTask: (state, action) => {
            state.tasks.push(action.payload)
        },

        changingStatus: (state, action) => {
            const updatedTask = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    task.done = action.payload.done
                }
                return task;
            });
            state.tasks = updatedTask

        },

        deletingTask: (state, action) => {

            const filteredTasks = state.tasks.filter((task) =>
                task.id !== action.payload.id
            )
            state.tasks = filteredTasks
        }
    }
})


//Actions are generated for each reducer functions
export const { setAllTasks, addingTask, changingStatus, deletingTask } = taskSlice.actions

export default taskSlice.reducer //exporting reducer itself  


