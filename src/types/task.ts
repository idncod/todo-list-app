export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export interface TaskRowProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}
