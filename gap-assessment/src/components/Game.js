import React ,{useState} from "react"
import Board from "./Board"
import {calculateWinner} from '../helper'

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
const winner = calculateWinner(gameHistory[moveNumber])

//Going to have to update the state here
const handler =(index)=>{
    //keep track of moves, and create a list of numbers so we can click on them and go to the corresponding move
    // We need in to be ordered numbers so use slice, from 0 toooooo moveNumber. (might need to +1) - yes - otherwise it breaks
const PointInGame = gameHistory.slice(0,moveNumber+1)
//this will tell us exactly where we are in the game at the moment, just to have something to eventually update whos Next
const currently = PointInGame[moveNumber]
const squares = [...currently]
if (winner|| squares[index]) return
//the classes will just keep going back and forth, so we jsut set that specific square to whatever ImNext is at the moment
squares[index] = ImNext
//update the history with the point in game, move numbers, and whosNext to be the opposite of whatever it was
setGameHistory([...PointInGame,squares])
setMoveNumber(PointInGame.length)
setWhosNext(!whosNext)
}

const jumpTo = (step)=>{
    setMoveNumber(step)
    setWhosNext(step %2 ===0)
}
const populateMoves = () => 
    gameHistory.map((step,move)=>{
            const location = move ? `go to move#: ${move}` : "Go to Start"
            return(
                <li key={move}>
                    <button id="historyBtn" onClick={()=> jumpTo(move)}>{location}</button>
                </li>
            )
    })


    return(
        <div>
            <div className="wrapper">
                <h1 >Tic-Tac-Toe</h1>
                <Board squares={gameHistory[moveNumber]} onClick={handler} id='BoardGame'/>
                <div>
                    <h2 className='gameText' id='testh2'>{winner ? winner : "Player Turn: " + ImNext}</h2>
                </div>
                
            </div>
            <div className="history">
                <h2 >Game History</h2>
                <div className="contain">
                {populateMoves()}
                </div>
            
            </div>
    </div>
    )
}

export default Game;