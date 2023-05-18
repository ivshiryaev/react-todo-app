import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


const TodoList = () => {

	const [todos,setTodos] = useState([])

	function isTextOk(text){
		//no text ? return
		if(!text || /^\s*$/.test(text)){
			return false
		}else{
			return true
		}
	}

	const addTodo = todo => {
		if(!isTextOk(todo.text)){
			return
		}

		const newTodos = [todo, ...todos]

		setTodos(newTodos)
	}

	const updateTodo = (todoId,newValue) => {
		if(!isTextOk(newValue.text)){
			return
		}

		setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
	}
	
	const completeTodo = (id) => {
		let updatedTodos = todos.map(todo => {
			if(todo.id === id){
				todo.isComplete = !todo.isComplete
			}
			return todo
		})

		setTodos(updatedTodos)
		console.log('complete todo')
	}

	const removeTodo = (id) => {
		const removeArr = [...todos].filter(todo => todo.id !== id)

		setTodos(removeArr)
		console.log('removing todo')
	}


	return (
		<div className="todo-list">
			<h1>Шо там, якие планы на сегодня ?</h1>
			<TodoForm onSubmit={addTodo}/>
			<Todo
				todos= {todos}
				completeTodo = {completeTodo}
				removeTodo = {removeTodo}
				updateTodo = {updateTodo}
			/>
		</div>
	)
}

export default TodoList