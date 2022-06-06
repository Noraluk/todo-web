import { ITask } from "./task.types"

export interface IInputProps {
	task: ITask | undefined
	onTaskChange : React.ChangeEventHandler<HTMLInputElement>
	addTask: (taskName: string) => void
}