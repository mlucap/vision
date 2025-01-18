import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';

const Board = ({orientation}) => {
  const [clickedSquare, setClickedSquare] = useState(null);

  const handleSquareClick = (square) => {
    console.log(`Square clicked: ${square}`);
    setClickedSquare(square);
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
