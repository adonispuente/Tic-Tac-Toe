import React from 'react'
import Game from '../components/Game'
import { shallow } from "enzyme"

// function shallowRenderGame() {
// 	return shallow(<Game />);
// }

// it('Shoulder render Game',()=>{
//     const container = shallowRenderGame();
// })

//-------
function renderGame(){
    const defaultProps = {
        onClick:()=>{}
    }
    const props ={...defaultProps}
    return shallow(<Game {...props}/>)
}

it('Should render Game component header',()=>{
    const container = renderGame();
    expect(container.find("h1").text()).toEqual("Tic-Tac-Toe")
})
//passes