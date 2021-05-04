import React from "react"
import Square from "./Square"


//the value passing down to the sqaure can contribute to the marking, and then use the marking to add the class 
const Board =({ sqaures, onClick})=> {
    
    return(
        <div className='board'>
        {sqaures.map((square,index)=>(
            <Square key={index} value={square} onClick={()=> onClick(index)}/>
        ))}
    </div>
    )
}

export default Board;