import React from 'react'
import Game from '../components/Game'
import { shallow } from "enzyme"

function renderGame() {
	return shallow(<Game />);
}

it('Shoulder render Game',()=>{
    const container = renderGame();
})