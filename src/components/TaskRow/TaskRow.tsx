import React from 'react';
import { TaskRowProps } from "../../types/task.ts";
import styles from './TaskRow.module.scss';

const TaskRow: React.FC<TaskRowProps> = ({task, onToggle, onDelete}) => {
    return(
        <li className={styles.taskRow}>
            <div className={styles.leftSection}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span className={`${styles.text} ${
                task.completed ? styles.completed : ''
            }`}
            >
                {task.text}
            </span>
            </div>
            <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>Delete</button>
        </li>
    )
}

export default TaskRow;