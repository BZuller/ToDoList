
import { useState } from 'react';
import { ITask } from '../../Interfaces';
import './styles.css'

interface TaskProps {
    task: ITask
    deleteTask(DeleteTaskById: number): void,
    fn: (id:number) => void

}

function TodoTask({task, deleteTask, fn}: TaskProps) {
    const [complete, setComplete] = useState<boolean>(false)
    function completeHandler() {
        setComplete(!complete);
        setTimeout(() => {fn(task.id)}, 1000)
    }
	return (
		<div className="card" style = {{backgroundColor: complete?"lightgreen":"white"}}>
			<div>
                <p>{task.nameTask}</p>
            </div>
            <div className="line2" >
            <input id = "taskCheckBox" type="checkbox" onChange={() => completeHandler() }/>
            <span className="btn-card" onClick={() => deleteTask(task.id)} style = {{backgroundColor: complete?"lightgreen":"white"}}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;
