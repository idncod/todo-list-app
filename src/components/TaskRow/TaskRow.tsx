import React from 'react';
import { TaskRowProps } from "../../types/task.ts";

const TaskRow: React.FC<TaskRowProps> = ({task, onToggle}) => {
    return(
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span>{task.text}</span>
            <button>Delete</button>
        </li>


    )


}

export default TaskRow;