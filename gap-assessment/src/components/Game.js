import React ,{useState} from "react"
import Board from "./Board"

//need to find a way to calculate the winner
/*  
- useState to manage the gameHistory, MoveNumber, probably one for whosNext (set to true) and build conditional logic for the O, calculate winner helper function
- for the isXnext
    - const playerTurn = isNext ? "X" : "O";
-passing everything down with props since its not many levels
*/

const Game = () =>{
    //all the state                                         empty bucket like the coding problems, not 0
const [gameHistory, setGameHistory] = useState([Array(9).fill(null)]);
const [moveNumber, setMoveNumber] = useState(0)
const [whosNext, setWhosNext]= useState(true)
//need a way to add logic for the whos next, use ternerary, we can slap on those strings with template literal 
const ImNext = whosNext? "X" : "O"

//Going to have to update the state here
const handler =(index)=>{
    //keep track of moves, and create a list of numbers so we can click on them and go to the corresponding move
    // We need in to be ordered numbers so use slice, from 0 toooooo moveNumber. (might need to +1) - yes - otherwise it breaks
const PointInGame = gameHistory.slice(0,moveNumber+1)
//this will tell us exactly where we are in the game at the moment, just to have something to eventually update whos Next
const currently = PointInGame[moveNumber]
const squares = [...currently]
//the classes will just keep going back and forth, so we jsut set that specific square to whatever ImNext is at the moment
squares[index] = ImNext
//update the history with the point in game, move numbers, and whosNext to be the opposite of whatever it was
setGameHistory([...PointInGame,squares])
setMoveNumber(PointInGame.length)
setWhosNext(!whosNext)
}


    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board squares={gameHistory[moveNumber]} onClick={handler} />
        </div>
    )
}

export default Game;