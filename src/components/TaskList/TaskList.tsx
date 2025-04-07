import React from "react";
import TaskRow from "../TaskRow/TaskRow.tsx";

const TaskList: React.FC = () => {

    return (
        <div>
            <div>
                <input type="text"
                       placeholder="Add Task"
                />
                <button>Add Task</button>
            </div>

            <ul>
                    <TaskRow />
            </ul>
        </div>
    )
}

export default TaskList;