import './App.css';
import Header from './Components/Header.js';
import Board from './Components/Board.js';
import Icons from './Components/Icons.js';
import ScoreCard from './Components/Scorecard.js';
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
	const [iconColour, setIconColour] = useState("white");
	const [orientation, setOrientation] = useState("white");
	const [coordinateToGuess, setCoordinateToGuess] = useState("");
	const [score, setScore] = useState(0);
	const [highscore, setHighscore] = useState(0);
	const [updateGuess, setUpdateGuess] = useState(false);

	const changeOrientation = () => {
		setIconColour(iconColour === "white" ? "black": "white");
		setOrientation(orientation === "white" ? "black": "white");
	}

	useEffect(() => {
		const localHighscore = localStorage.getItem("highscore");
		setHighscore(localHighscore !== null ? localHighscore : 0);
	},[])

	useEffect(() => {
		const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
		const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

		const generateNewGuess = () => {
			setCoordinateToGuess(horizontalAxis[Math.floor(Math.random() * horizontalAxis.length)] +
						verticalAxis[Math.floor(Math.random() * verticalAxis.length)])
		}

		generateNewGuess();
	},[updateGuess])

	const handleGuess = (square) => {
		if(square === coordinateToGuess) {
			setScore((score) => score + 1)
		} else {
			setHighscore(score > highscore ? score : highscore);
			setScore(0);
		}
		setUpdateGuess(!updateGuess);
	}

	useEffect(() => {
		localStorage.setItem("highscore", highscore);
	}, [highscore])

	return (
		<>
		<Header />
		<div className='container'>
			<div className="icons">
				<Icons colour={iconColour}/>
			</div>
			<div className='board'>
				<Board orientation={orientation} handleGuess={handleGuess}/>
			</div>
			<div className="rightcol">
				<div className="scorecard">
					<ScoreCard score={score} highscore={highscore} coordinateToGuess={coordinateToGuess}/>
				</div>
				<button onClick={changeOrientation} id='changeOrientation'>Change orientation</button>
			</div>
		</div>
		<div className="footer">
			<a href="https://github.com/mlucap/">github</a>
		</div>
		<Analytics />
		</>
	);
}

export default App;
