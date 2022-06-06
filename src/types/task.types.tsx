interface ITask {
	id?: number,
	name: string,
	description?: string,
	created_at?: Date,
	updated_at?: Date,
}

interface ITaskProps {
	tasks: Array<ITask>
	removeTask: (id: number) => void
}

export type { ITask, ITaskProps }