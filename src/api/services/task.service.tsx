import { AxiosResponse } from "axios";
import api from "..";
import { ITask } from "../../types/task.types";

function getTasks() : Promise<AxiosResponse<ITask[], any>>{
	return api.get<ITask[]>('/tasks')
}

function createTask(taskName: string) {
	return api.post('/tasks',{
		name : taskName,
	})
}

function deleteTask(id: number) {
	return api.delete(`/tasks/${id}`)
}

export { getTasks, createTask, deleteTask }