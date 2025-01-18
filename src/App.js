import './App.css';
import Header from './Components/Header.js';
import Board from './Components/Board.js';
import Icons from './Components/Icons.js';
import ScoreCard from './Components/Scorecard.js';
import { useState } from 'react';

const App = () => {
	const [iconColour, setIconColour] = useState("white");
	const [orientation, setOrientation] = useState("white");

	const changeOrientation = () => {
		setIconColour(iconColour === "white" ? "black": "white");
		setOrientation(orientation === "white" ? "black": "white");
	}

	return (
		<>
		<Header />
		<div className='container'>
			<div className="icons">
				<Icons colour={iconColour}/>
			</div>
			<div className='board'>
				<Board orientation={orientation}/>
			</div>
			<div className="rightcol">
				<div className="scorecard">
					<ScoreCard score={5} highscore={6} coordinateToGuess={"b6"}/>
				</div>
				<button onClick={changeOrientation} id='changeOrientation'>Change orientation</button>
			</div>
		</div>
		</>
	);
}

export default App;
