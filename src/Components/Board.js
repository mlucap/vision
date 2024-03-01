import { React, useState, useCallback } from 'react';
import './Board.css';

function Board() {
	let board = [];
	const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
	const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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
				<div id="board-container">{board}</div>
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
				<p className="text">{highscore}</p>
				<h1 className="header-text">Current Score</h1>
				<p className="text">{score}</p>
			</div>
		</div>
	);
}

export default Board;
