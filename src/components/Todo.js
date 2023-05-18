import React, { useState } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import TodoForm from './TodoForm'


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

	const [edit,setEdit] = useState({
		id:null,
		value:''
	})

	const submitUpdate = value => {
		updateTodo(edit.id,value)
		setEdit({
			id:null,
			value:''
		})
	}

	if(edit.id){
		return <TodoForm edit={edit} onSubmit={submitUpdate}/>
	}

	return(
		<div className="todos">
			{todos.map((todo,index) => (
				<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
				key={index}>

					<div key={ todo.id }
						onClick={()=> completeTodo(todo.id)}>
						{todo.text}
					</div>

					<div className="icons">
						<AiOutlineCloseCircle
							onClick={()=> removeTodo(todo.id)}
						/>
						<CiEdit
							onClick={() => setEdit({ id: todo.id, value: todo.text})}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default Todo