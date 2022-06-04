import { FormControl, Button, InputGroup } from "react-bootstrap"

import './Input.scss'

function Input(prop) {
	return (
		<InputGroup className="title">
			<FormControl value={ prop.task } onChange={ (e) => prop.onTaskChange(e) }/>
			<Button variant="outline-secondary" onClick={ () => prop.addTask(prop.task) }>
				Button
			</Button>
		</InputGroup>
	)
}

export default Input