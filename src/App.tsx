import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./Interfaces";

import './styles/styles.css'

function App() {

	const [task, setTask] = useState<string>("")

	const [todoList, setTodoList] = useState<ITask[]>([])
	
	function editState(id: number) {
		const task = todoList.filter(t => {
			if(t.id === id){
				t.complete = !t.complete
			} return t
		})
		setTodoList([...task])
	}

	const completedTasks = todoList.filter(t => {
		if(t.complete){
			return t;
		}
	})
	const pendantTasks = todoList.filter


	function addTask() {

		const idRandom = (num: number) =>Math.floor( Math.random() * num)

		const newTask = { id: idRandom(10), nameTask: task, complete: false}

		setTodoList([...todoList, newTask])
		setTask ("")

	}

	function deleteTask(DeleteTaskById: number) {
		setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById))
	}

	return (
		<div className="App">

			<header>

				<h2>Lista de tarefas</h2>

				<input
					type="text" autoComplete="off"
					placeholder="Digite sua tarefa..."
					name="task"
					className="input"
					value={task}
					onChange={(event) => setTask(event.target.value)}
				/>
				<div className = "div-filters">
				<button type="submit" className="btn-header" onClick={addTask}>Adicionar Tarefa</button>

				<button type="submit" className="filters" onClick={event => editState}>Apenas concluidas</button>

				<button type="submit" className="filters" onClick={addTask}>Apenas pendentes</button>

				<button type="submit" className="filters" onClick={addTask}>Mostrar todas</button>
				</div>
			</header>
			<div className="line"></div>

			{todoList.map((task, key) => (
			<TodoTask key={key} task =  {task} deleteTask={deleteTask} fn = {editState}/>
			))}
		</div>
	);
}

export default App;
