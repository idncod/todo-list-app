import React from "react";
import TaskRow from "../TaskRow/TaskRow.tsx";
import {useTasks} from "../../hooks/useTasks.ts";
import styles from './TaskList.module.scss';

const TaskList: React.FC = () => {
    const { tasks, input, setInput, addTask, toggleTask, deleteTask } = useTasks();

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputGroup}>
                <input type="text"
                       value={input}
                       className={styles.input}
                       placeholder="Add Task"
                       onChange={(e) => setInput(e.target.value)}
                       onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <button onClick={addTask} className={styles.button}>Add Task</button>
            </div>

            <ul className={styles.taskList}>
                {tasks.map((task) => (
                    <TaskRow
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onDelete={deleteTask}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TaskList;