import React from "react";

function Box({id, bgColor, width, height, removeBox}) {
    const remove = () => removeBox(id);
    return (
        <>
            <div
                data-testid="box"
                style={{ backgroundColor: bgColor, width: `${width}em`, height: `${height}em` }}
            ></div>
            <button onClick={remove}>X</button>
        </>
    )
}

export default Box;