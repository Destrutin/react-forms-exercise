import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.trim()) {
            alert("Must add a valid todo");
            return;
        }
        addTodo({formData, id: uuid()});
        setFormData("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input
                id="todo"
                type="text"
                name="todo"
                placeholder="New todo"
                value={formData}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;