import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from '../components/NewTodoForm';

test('renders without crashing', () => {
    render(<NewTodoForm addTodo={() => {}} />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm addTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});

test('can submit form', () => {
    const addTodo = jest.fn();
    const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodo} />);
    const input = getByLabelText('Task:');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(getByText('Add Todo'));
    expect(addTodo).toHaveBeenCalledWith({ task: 'New Todo', id: expect.any(String) });
});