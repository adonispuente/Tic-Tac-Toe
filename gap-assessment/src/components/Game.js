import React ,{useState} from "react"
import Board from "./Board"

//need to find a way to calculate the winner
/*  
- useState to manage the gameHistory, MoveNumber, probably one for isXnext (set to true) and build conditional logic for the O, calculate winner helper function
- for the isXnext
    - const playerTurn = isNext ? "X" : "O";
-passing everything down with props since its not many levels
*/

const Game = () =>{
    //all the state                                         empty bucket like the coding problems, not 0
const [gameHistory, setGameHistory] = useState(Array(9).fill(null));
const [moveNumber, setMoveNumber] = useState(0)

const handler =(index)=>{

}


    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board sqaures ={gameHistory[moveNumber]} onClick={handler} />
        </div>
    )
}

export default Game;