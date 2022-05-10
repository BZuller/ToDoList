import { useEffect, useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./Interfaces";

import './styles/styles.css'
import axios from "axios";

function App() {


	const [task, setTask] = useState<string>("")

	const [todoList, setTodoList] = useState<ITask[]>([])

	useEffect(() => {
		axios.get(`https://trainees-2022-todo-api-week-3.herokuapp.com/todos/`)
		.then(resposta=> setTodoList(resposta.data))
		.catch(()=> console.log('Nao gerou a array'))
	}, [todoList]
	)

	const [filter, setFilter] = useState<ITask[]>(todoList)

    useEffect(() => setFilter(todoList), [todoList])

	function addTask(title: String, description: String) {
		axios.post(`https://trainees-2022-todo-api-week-3.herokuapp.com/todos`, {
			title, description
		})
		.then(()=> console.log(' Task Adicionada!'))
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
		axios.delete(`https://trainees-2022-todo-api-week-3.herokuapp.com/todos/${DeleteTaskById}`)
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
				<button type="submit" className="btn-header" onClick={()=>addTask(task, 'joao vsf')}>Adicionar Tarefa</button>

				<button type="submit" className="filters" onClick={() => verFinalizadas()}>Apenas concluidas</button>

				<button type="submit" className="filters" onClick={() => verPendentes()}>Apenas pendentes</button>

				<button type="submit" className="filters" onClick={() => verTodas()}>Mostrar todas</button>
				</div>
			</header>
			<div className="line"></div>

			{filter.map((task, key) => (
			<TodoTask todoList={todoList} key={key} task = {task} deleteTask={DeleteTask} setTodoList={setTodoList} filter={filter}/>
			))}
		</div>
	);
}

export default App;
