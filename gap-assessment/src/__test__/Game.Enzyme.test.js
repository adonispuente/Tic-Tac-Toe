import React from "react"
import Game from "../components/Game"
import {mount} from "enzyme"

function renderGame(){
    const defaultProps={
        onClick:()=>{}
    }
    return mount(<Game {...defaultProps}/>)
}

it('Should allow me to click a square, marking X',()=>{
    const container = renderGame();
    const allSqaures = container.find('Square');
    allSqaures.at(0).simulate("click")
    expect(allSqaures.at(0).text()).toBe("X")
})

it('marking X, then O',()=>{
    const container = renderGame();
    const allSqaures = container.find('Square');
    allSqaures.at(0).simulate("click")
    allSqaures.at(1).simulate("click")
    expect(allSqaures.at(1).text()).toBe("O")
})