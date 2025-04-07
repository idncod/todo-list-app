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
        };

        setTasks(prev => [...prev, newTask]);
        setInput('');
    };

    return {
        tasks,
        input,
        setInput,
        addTask
    };
}
