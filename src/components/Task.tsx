import { useDeleteTaskMutation, useGetTasksQuery } from "../api/services/task.service"
import Loading from "./Loading"

function Tasks() {
	const { data: tasks = [] } = useGetTasksQuery()
	const [ deleteTask, { isLoading }] = useDeleteTaskMutation()

	const removeTask = (id: number) => deleteTask(id)

	if (isLoading ) return <Loading/>
	
	return (
		<div>
			{
				tasks.map((task) => {
					return (
						<div className="flex flex-row w-96" key={ task.id }>
							<div className="w-80 bg-orange-100 shadow-xl rounded-md mt-4 p-1 text-xl font-bold transition ease-in-out delay-2000 hover:scale-105 text-center"> { task.name } </div>
							<button className="w-20 mt-3.5 ml-5 bg-gray-500 text-white rounded-md" onClick={ () => removeTask(task.id!) }> Del </button>
						</div>
					)
				})
			}
		</div>
	)
}

export default Tasks