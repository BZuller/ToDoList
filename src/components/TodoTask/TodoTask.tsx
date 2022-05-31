
import { ITask } from '../../Interfaces';
import './styles.css'

interface TaskProps {
    task: ITask
    deleteTask(DeleteTaskById: string): void
    setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>
    filter: ITask[]
    todoList: ITask[]
}
function TodoTask({task, deleteTask, setTodoList, todoList}: TaskProps) {

    function completeHandler(id : string) {
        return setTodoList(todoList.map((tarefa) => {
            if(tarefa.id === id)
                tarefa.complete = !tarefa.complete
                return tarefa
        }))}
            	return (
	<div className="card" style = {{backgroundColor: task.complete?"lightgreen":"white"}}  >
			<div>
                <p>{task.description}</p>
            </div>
        <div className="line2" >
            <input id = "taskCheckBox" type="checkbox" defaultChecked = {task.complete} onChange={() => completeHandler(task.id)}/>
            <span className="btn-card" onClick={() => deleteTask(task.id)} style = {{backgroundColor: task.complete?"lightgreen":"white"}}>X</span>
        </div>
	</div>
	);
}

export default TodoTask;
