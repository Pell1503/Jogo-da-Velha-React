
import React, { useState } from 'react';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null).map((_, i) => i));

  const handleClick = (index) => {
    if (squares[index] === 'X') return;
    const newSquares = squares.slice();
    newSquares[index] = 'X';
    setSquares(newSquares);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Próximo Jogador: X</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 60px)',
        gap: '10px',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        {squares.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '60px',
              height: '60px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
