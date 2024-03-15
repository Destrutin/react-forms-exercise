import React, { useState } from "react";
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"; 

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    }

    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }
    console.log("Todos:", todos);
    return (
        <>
            <h1>Todo List</h1>
            <NewTodoForm addTodo={addTodo}/>
            <div>
                <ul>
                    {todos.map(({ id, formData }) => 
                        <Todo 
                            id={id} 
                            key={id} 
                            todo={ formData }
                            removeTodo={remove}
                            data-testid={`todo-${id}`}
                    />)}
                </ul>
            </div>
        </>
    )
}

export default TodoList;