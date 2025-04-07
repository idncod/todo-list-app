import React from 'react';
import { TaskRowProps } from "../../types/task.ts";

const TaskRow: React.FC<TaskRowProps> = ({task}) => {
    return(
        <li>
            <input
                type="checkbox"
                checked={false}
            />
            <span>{task.text}</span>
            <button>Delete</button>
        </li>


    )


}

export default TaskRow;