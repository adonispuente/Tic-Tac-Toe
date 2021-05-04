import React, { Children } from "react"
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
//passed
it('marking X, then O',()=>{
    const container = renderGame();
    const allSqaures = container.find('Square');
    allSqaures.at(0).simulate("click")
    allSqaures.at(1).simulate("click")
    expect(allSqaures.at(1).text()).toBe("O")
})
//passed

it('Produce a Tie in the Game',()=>{
    const container = renderGame();
    const allSqaures = container.find('Square');
    //X,O,null - first row
    allSqaures.at(0).simulate("click")
    allSqaures.at(1).simulate("click")

    //X,O, null - second row
    allSqaures.at(3).simulate("click")
    allSqaures.at(4).simulate("click")

    //O,X,null third row
    allSqaures.at(7).simulate("click")
    allSqaures.at(6).simulate("click")

    //X,O,X - first row
    allSqaures.at(2).simulate("click")
    //X,O,O - second row
    allSqaures.at(5).simulate("click")

    //O,X,X - third row
    allSqaures.at(8).simulate("click")
    expect(container.find("#testh2").text()).toBe("Its a Tie :/")
    
})
//passed

it('Produce a Win in the Game',()=>{
    const container = renderGame();
    const allSqaures = container.find('Square');
    //X,O,null - first row
    allSqaures.at(0).simulate("click")
    allSqaures.at(1).simulate("click")

    //X,O, null - second row
    allSqaures.at(3).simulate("click")
    allSqaures.at(4).simulate("click")

    //O,X,null third row
    allSqaures.at(6).simulate("click")
    allSqaures.at(7).simulate("click")

    
    expect(container.find("#testh2").text()).toBe("X is the Winner!")
    
})
//passed

it('History buttons show up an accurate number of times',()=>{
    const container = renderGame();
    const allSqaures = container.find('Square');
    //X,O,null - first row
    allSqaures.at(0).simulate("click")
    allSqaures.at(1).simulate("click")

    //X,O, null - second row
    allSqaures.at(3).simulate("click")
    allSqaures.at(4).simulate("click")

    //O,X,null third row
    allSqaures.at(6).simulate("click")
    allSqaures.at(7).simulate("click")

    //15 because each square is a button
    expect(container.find("button").length).toBe(15)
    
})
//passed

it('empty board after pressing go to start',()=>{
    const container = renderGame();
    const allSqaures = container.find('Square');
    const goToStart = container.find("#historyBtn").at(0)
    //X,O,null - first row
    allSqaures.at(0).simulate("click")
    allSqaures.at(1).simulate("click")

    //X,O, null - second row
    allSqaures.at(3).simulate("click")
    allSqaures.at(4).simulate("click")

    //O,X,null third row
    allSqaures.at(6).simulate("click")
    allSqaures.at(7).simulate("click")

    goToStart.simulate("click")

    expect(allSqaures.at(0).text()).toBe("")
    expect(allSqaures.at(1).text()).toBe("")
    expect(allSqaures.at(3).text()).toBe("")
    expect(allSqaures.at(4).text()).toBe("")
    expect(allSqaures.at(6).text()).toBe("")
    expect(allSqaures.at(7).text()).toBe("")

    
})
