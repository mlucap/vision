import React from 'react';
import Chessboard from 'chessboardjsx';

const Board = ({orientation, handleGuess}) => {

  const handleSquareClick = (square) => {
    handleGuess(square);
  };

  return (
    <div>
      <Chessboard
        position="empty" // Empty chessboard
        showNotation={false}
        orientation={orientation}
        onSquareClick={handleSquareClick} // Detect clicks
        width={400} // Set board size
      />
    </div>
  );
};

export default Board;
