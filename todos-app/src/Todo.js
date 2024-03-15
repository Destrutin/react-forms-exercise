import React from "react";

function Todo({id, todo, removeTodo}) {
    const remove = () => removeTodo(id);
    console.log(todo);
    return (
        <>
            <div data-testid="todo">
                <li>{ todo }</li>
            </div>
            <button onClick={remove}>X</button>
        </>
    )
}

export default Todo;