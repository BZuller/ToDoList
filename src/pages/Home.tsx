import { useEffect, useState } from "react";
import TodoTask from "../components/TodoTask/TodoTask";
import { ITask } from "../Interfaces";
import axios from "axios";

import '../styles/styles.css'

function App() {

	const [task, setTask] = useState<string>("")

	const [todoList, setTodoList] = useState<ITask[]>([])

	const [filter, setFilter] = useState<ITask[]>(todoList)

	useEffect(() => {
		axios.get(`http://localhost:3333/tasks`)
		.then(resposta=> setTodoList(resposta.data))
		.catch(()=> console.log('Nao gerou a array'))
	}, [todoList]
	)

	function addTask(name: String) {
		axios.post(`http://localhost:3333/tasks`, {
			name
		})
		.then((response)=> console.log(response))
		.catch(()=> console.log('Erro ao adicionar a task!'))
	}

	function verPendentes () {
					return setFilter(todoList.filter((tarefa: ITask) => tarefa.complete === false))
				}

	function verFinalizadas () {
					return setFilter(todoList.filter((tarefa: ITask) => tarefa.complete === true))
				}
	function verTodas(){
	 return setFilter(todoList)
	}
	function DeleteTask(DeleteTaskById: string) {
		axios.delete(`http://localhost:3333/tasks/${DeleteTaskById}`)
		.then(() => {console.log('Deletado')})
		.catch(() => {console.log('Erro inesperado!')})
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
					required
				/>
				<div className = "div-filters">
				<button type="submit" className="btn-header" onClick={() => addTask(task)}>Adicionar Tarefa</button>

				<button type="submit" className="filters" onClick={() => verFinalizadas()}>Apenas concluidas</button>

				<button type="submit" className="filters" onClick={() => verPendentes()}>Apenas pendentes</button>

				<button type="submit" className="filters" onClick={() => verTodas()}>Mostrar todas</button>
				</div>
			</header>n
			<div className="line"></div>

			{filter.map((task) => (
			<TodoTask
			todoList={todoList}
			key={task.id}
			task = {task}
			deleteTask={DeleteTask}
			setTodoList={setTodoList}
			filter={filter}/>
			))}
		</div>
	);
}

export default App;
