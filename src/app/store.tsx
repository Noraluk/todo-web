import { configureStore } from "@reduxjs/toolkit";
import taskService from "../api/services/task.service";
import taskReducer from "../features/task.slice";

export const store = configureStore({
	reducer: {
		task: taskReducer,
		[taskService.reducerPath]: taskService.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(taskService.middleware);
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
