import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
    const [formData, setFormData] = useState({
        task: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData, id: uuid() });
        setFormData({ task: '' });
    };

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">Task: </label>
                <input
                    id="task"
                    name="task"
                    type="task"
                    value={formData.task}
                    onChange={handleChange}
                />
            </div>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
