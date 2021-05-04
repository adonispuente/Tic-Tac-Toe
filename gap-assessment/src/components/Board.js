import React from "react"
import Square from "./Square"


//the value passing down to the sqaure can contribute to the marking, and then use the marking to add the class 
const Board = ({ squares, onClick }) => (
        <div className="board">
        {squares.map((square, index) => (
            <Square key={index} value={square} onClick={() => onClick(index)}/>
        ))}
    </div>
    
)


export default Board;