import { React, useState, useCallback } from 'react';
import './Board.css';

function Board() {
	let board = [];
	const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
	const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

	const [coordinateToGuess, setCoordinateToGuess] = useState('');
	const handleNewSquare = useCallback(() => {
		setCoordinateToGuess((a) => a + 'a');
	}, []);

	for (let j = verticalAxis.length - 1; j >= 0; j--) {
		for (let i = 0; i < horizontalAxis.length; i++) {
			const number = j + i + 2;
			board.push(
				<Square
					colour={number % 2 === 0 ? 'dark' : 'light'}
					coordinate={horizontalAxis[i] + verticalAxis[j]}
					handleNewSquare={handleNewSquare}
				/>
			);
		}
	}
	return <div id="board-container">{board}</div>;
}

function Square({ colour, coordinate, handleNewSquare }) {
	return (
		<div className={`${colour} square`} onClick={handleNewSquare}>
			{coordinate}
		</div>
	);
}

export default Board;
