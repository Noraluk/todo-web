import api from ".."

function getTasks() {
	return api.get('/tasks')
}

function createTask(taskName) {
	return api.post('/tasks',{
		name : taskName,
	})
}

function deleteTask(index) {
	return api.delete(`/tasks/${index}`)
}

export { getTasks, createTask, deleteTask }