import { useState } from 'react';
import { Task } from '../types/task';

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (!input.trim()) return;

        const newTask: Task = {
            id: String(Date.now()),
            text: input.trim(),
            completed: false,
        };

        setTasks(prev => [...prev, newTask]);
        setInput('');
    };

    const toggleTask = (id: string) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return {
        tasks,
        input,
        setInput,
        addTask,
        toggleTask,
        deleteTask
    };
}
