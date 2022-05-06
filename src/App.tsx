import { useEffect, useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./Interfaces";
import { v4 as uuidv4} from "uuid";

import './styles/styles.css'

function App() {


	const [task, setTask] = useState<string>("")

	const [todoList, setTodoList] = useState<ITask[]>([])

	const [filter, setFilter] = useState<ITask[]>(todoList)

    useEffect(() => setFilter(todoList), [todoList])

	function addTask() {

		const newTask = { id: uuidv4(), nameTask: task, complete: false}

		setTodoList([...todoList, newTask])
		setTask ("")

	}

	//kd o css vai pra puta que pariu


	function verPendentes () {
					return setFilter(todoList.filter((tarefa: ITask) => tarefa.complete === false))
				}
  
	function verFinalizadas () {
					return setFilter(todoList.filter((tarefa: ITask) => tarefa.complete === true))
				}
	function verTodas(){
	 return setFilter(todoList)
	}

	function deleteTask(DeleteTaskById: string) {
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
					required
				/>
				<div className = "div-filters">
				<button type="submit" className="btn-header" onClick={addTask}>Adicionar Tarefa</button>

				<button type="submit" className="filters" onClick={() => verFinalizadas()}>Apenas concluidas</button>

				<button type="submit" className="filters" onClick={() => verPendentes()}>Apenas pendentes</button>

				<button type="submit" className="filters" onClick={() => verTodas()}>Mostrar todas</button>
				</div>
			</header>
			<div className="line"></div>

			{filter.map((task, key) => (
			<TodoTask todoList={todoList} key={key} task = {task} deleteTask={deleteTask} setTodoList={setTodoList} filter={filter}/>
			))}
		</div>
	);
}

export default App;
