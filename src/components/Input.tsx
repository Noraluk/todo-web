import { useCreateTaskMutation } from "../api/services/task.service"
import { useAppDispatch, useAppSelector } from "../app/hook"
import { setTask } from "../features/task.slice"
import Loading from "./Loading"

function Input() {
	const task = useAppSelector((state)=> state.task)
	const dispatch = useAppDispatch()

	const [ createTask, { isLoading }] = useCreateTaskMutation()

	const onTaskChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => dispatch(setTask(target.value))
	const addTask = (name: string = '') => createTask({name: name}).then(() => dispatch(setTask('')))

	if (isLoading )return <Loading/>

	return (
		<div className="flex flex-row w-96">
			<input className="
				border-y border-l border-gray-300 rounded-l-sm px-3 py-1.5 flex-1
				focus:outline-none focus:border-sky-500 focus:ring-sky-500
			" value={ task?.name } onChange={ onTaskChange }></input>
			<button className="border border-gray-400 rounded-r-sm px-3 py-1.5 text-gray-500" onClick={ () => addTask(task?.name) }> Sumbit </button>
		</div>
	)
}

export default Input