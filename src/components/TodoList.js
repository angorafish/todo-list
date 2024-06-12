import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './Todolist.css';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoList">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task{todo.task}
                        removeTodo{removeTodo}
                    />
                ))}
            </div>
        </div>
    );
}
export default TodoList;