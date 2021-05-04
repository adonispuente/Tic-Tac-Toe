import React from "react"


//from game logic, ill have to pass down a value to determin is marking, and the onClick method into each sqaure
const Square = ({value, onClick})=>{
    const marking = value ? `squares ${value}` : `sqaures`;

    return(
        <button onClick ={onClick}>
            {value}
        </button>
    )
}

export default Square;