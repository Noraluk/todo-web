import { Button } from 'react-bootstrap'
import './Task.scss'

function Task({tasks, removeTask}) {
	return (
		<div>
		{
			tasks.map((task) => {
			return (
				<div className='main' key={ task.id }>
					<div className='task'>
						{ task.name }
					</div>
					<Button className='del' variant='secondary' onClick={ () => removeTask(task.id) }> Del </Button>
				</div>
				
			) 
			})
		}
		</div>
	)
}

export default Task