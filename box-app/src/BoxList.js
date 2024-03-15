import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"; 
import { v4 as uuid } from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
    }

    const remove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <>
            <h1>Box List</h1>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({ id, bgColor, width, height }) => 
                    <Box 
                        id={id} 
                        bgColor={bgColor} 
                        width={width} 
                        height={height} 
                        key={id} 
                        removeBox={remove}
                        data-testid={`box-${id}`}
                    />)}
            </div>
        </>
    )
}

export default BoxList;