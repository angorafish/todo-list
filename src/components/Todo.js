import React from 'react';
import './Todo.css'

function Todo({ id, task, removeTodo }) {
    const handleRemove = () => removeTodo(id);

    remove (
        <div className="Todo">
            <span>{task}</span>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Todo;