import React from "react";
import TaskRow from "../TaskRow/TaskRow.tsx";
import {useTasks} from "../../hooks/useTasks.ts";

const TaskList: React.FC = () => {
    const { tasks, input, setInput, addTask, toggleTask } = useTasks();

    return (
        <div>
            <div>
                <input type="text"
                       value={input}
                       placeholder="Add Task"
                       onChange={(e) => setInput(e.target.value)}
                       onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            <ul>
                {tasks.map((task) => (
                    <TaskRow
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TaskList;