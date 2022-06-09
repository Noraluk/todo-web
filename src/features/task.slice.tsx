import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITask } from "../types/task.types"

const initialState: ITask = {
	name: ''
}

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		setTask(state,  action: PayloadAction<string>) {
			state.name = action.payload
		},
	}
})

export const { setTask } = taskSlice.actions
export default taskSlice.reducer