import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from '../components/Todo';

test('renders without crashing', () => {
    render(<Todo id="1" task="Test Todo" removeTodo={() => {}} />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<Todo id="1" task="Test Todo" removeTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});

test('calls removeTodo on button click', () => {
    const removeTodo = jest.fn();
    const { getByText } = render(<Todo id="1" task="Test Todo" removeTodo={removeTodo} />);
    const button = getByText('X');
    fireEvent.click(button);
    expect(removeTodo).toHaveBeenCalledWith('1');
});