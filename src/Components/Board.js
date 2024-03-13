import { React, useState, useCallback } from 'react';
import './Board.css';
import b_400 from '../imgs/black_400.png';
import w_400 from '../imgs/white_400.png';
import flip_board from '../imgs/up-down.png';

function Board() {
	let board = [];
	const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
	const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

	// will change this from using a1 as the first guess
	const [coordinateToGuess, setCoordinateToGuess] = useState('a1');
	const [highscore, setHighscore] = useState(0);
	const [score, setScore] = useState(0);

	const handleNewSquare = useCallback(
		(e) => {
			setCoordinateToGuess((a) => a + 'a');

			if (e.target.id === coordinateToGuess) {
				setScore((i) => i + 1);
			} else {
				setScore(0);
				if (score > highscore) setHighscore(score);
			}

			const generateNewSquare = () => {
				return (
					horizontalAxis[Math.floor(Math.random() * horizontalAxis.length)] +
					verticalAxis[Math.floor(Math.random() * verticalAxis.length)]
				);
			};
			setCoordinateToGuess(generateNewSquare);
		},
		// probably not good practice but it doesnt break anything.
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[coordinateToGuess, highscore, score]
	);

	for (let j = verticalAxis.length - 1; j >= 0; j--) {
		for (let i = 0; i < horizontalAxis.length; i++) {
			const number = j + i + 2;
			const key = horizontalAxis[i] + verticalAxis[j];
			board.push(
				<Square
					key={key}
					colour={number % 2 === 0 ? 'dark' : 'light'}
					coordinate={key}
					handleNewSquare={handleNewSquare}
				/>
			);
		}
	}
	return (
		<>
			<div id="body-container">
				<Icon />
				<div id="board-container">{board}</div>
				{/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a id="flip-board">
					<img src={flip_board} alt="flip board" id="flip-icon" />
				</a>
				<ScoreCard
					score={score}
					highscore={highscore}
					coordinateToGuess={coordinateToGuess}
				/>
			</div>
		</>
	);
}

function Square({ colour, coordinate, handleNewSquare }) {
	return (
		<div
			id={coordinate}
			className={`${colour} square`}
			onClick={(e) => handleNewSquare(e)}
		></div>
	);
}

function ScoreCard({ score, highscore, coordinateToGuess }) {
	return (
		<div id="scorecard-container">
			<div>
				<h1 className="header-text">Find: {coordinateToGuess}</h1>
				<h1 className="header-text">Highscore</h1>
				<h2 className="text">{highscore}</h2>
				<h1 className="header-text">Current Score</h1>
				<h2 className="text">{score}</h2>
			</div>
		</div>
	);
}

function Icon({ colour }) {
	return (
		<div id="icon-container">
			<img src={b_400} alt="icon" className="icon" />
			<img src={w_400} id="white" alt="icon" className="icon" />
		</div>
	);
}

export default Board;
