import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskList from '../TaskList';

describe('TaskList', () => {
    it('renders input and button', () => {
        render(<TaskList />);
        expect(screen.getByPlaceholderText(/add task/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
    });

    it('adds a task to the list', async () => {
        render(<TaskList />);
        const input = screen.getByPlaceholderText(/add task/i);
        const addButton = screen.getByRole('button', { name: /add task/i });

        await userEvent.type(input, 'Buy mangoes');
        await userEvent.click(addButton);

        expect(screen.getByText(/buy mangoes/i)).toBeInTheDocument();
    });

    it('toggles task completion', async () => {
        render(<TaskList />);
        const input = screen.getByPlaceholderText(/add task/i);
        const addButton = screen.getByRole('button', { name: /add task/i });

        await userEvent.type(input, 'Read a book');
        await userEvent.click(addButton);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();

        await userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });

    it('deletes a task', async () => {
        render(<TaskList />);
        const input = screen.getByPlaceholderText(/add task/i);
        const addButton = screen.getByRole('button', { name: /add task/i });

        await userEvent.type(input, 'Clean kitchen');
        await userEvent.click(addButton);

        const deleteButton = screen.getByRole('button', { name: /delete/i });
        await userEvent.click(deleteButton);

        expect(screen.queryByText(/clean kitchen/i)).not.toBeInTheDocument();
    });
});
