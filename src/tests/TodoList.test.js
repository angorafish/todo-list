import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders without crashing', () => {
    render(<TodoList />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

test('can add a new todo', () => {
    const { getByLabelText, getByText, queryByText } = render(<TodoList />);
    const input = getByLabelText('Task:');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(getByText('Add Todo'));
    expect(queryByText('New Todo')).toBeInTheDocument();
});

test('can remove a todo', () => {
    const { getByLabelText, getByText, queryByText } = render(<TodoList />);
    const input = getByLabelText('Task:');
    fireEvent.change(input, { target: { values: 'New Todo' } });
    fireEvent.click(getByText('Add Todo'));
    const removeButton = queryByText('X');
    fireEvent.click(removeButton);
    expect(queryByText('New Todo')).not.toBeInTheDocument();
});