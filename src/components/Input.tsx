import { IInputProps } from "../types/input.types"

function Input({ task, onTaskChange, addTask }: IInputProps) {
	return (
		<div className="flex flex-row w-96">
			<input className="
				border-y border-l border-gray-300 rounded-l-sm px-3 py-1.5 flex-1
				focus:outline-none focus:border-sky-500 focus:ring-sky-500
			" value={ task?.name } onChange={ onTaskChange }></input>
			<button className="border border-gray-400 rounded-r-sm px-3 py-1.5 text-gray-500" onClick={ () => addTask(task?.name ? task!.name : '') }> Sumbit </button>
		</div>
	)
}

export default Input