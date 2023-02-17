import React from 'react';
import './static/style/main.css';
function Square({ value, handleClick }) {
  const [boardIndex, squareState] = value;

  return (
    <div>
      <button className="square" onClick={() => handleClick(boardIndex)}>
        {squareState}
      </button>
    </div>
  );
}
function App() {
  const initialBoard = [
    [
      ['00', null],
      ['01', null],
      ['02', null],
    ],
    [
      ['10', null],
      ['11', null],
      ['12', null],
    ],
    [
      ['20', null],
      ['21', null],
      ['22', null],
    ],
  ];
  const statuses = [
    'Next player: X',
    'Next player: O',
    'Winner: X',
    'Winner: O',
    'Tie',
  ];
  const [gameState, setGameState] = React.useState(initialBoard);
  const [gameStatus, setGameStatus] = React.useState(statuses[0]);
  const [player, setPlayer] = React.useState('X');

  // update board
  const handleClick = (boardIndex) => {
    console.log('clicked', boardIndex, player);
    let newGameState = gameState;
    newGameState[boardIndex[0]][boardIndex[1]] = [boardIndex, player];
    setGameState([...newGameState]);
    setPlayer(player === 'X' ? 'O' : 'X');
    checkWin();
  };

  function checkWin() {
    for (let i = 0; i < gameState.length; i++) {
      console.log(i);
      if (
        gameState[0][i][1] &&
        gameState[0][i][1] === gameState[1][i][1] &&
        gameState[1][i][1] === gameState[2][i][1]
      ) {
        setGameStatus(player === 'X' ? statuses[2] : statuses[3]);
        break;
      }
      if (
        gameState[i][0][1] &&
        gameState[i][0][1] === gameState[i][1][1] &&
        gameState[i][1][1] === gameState[i][2][1]
      ) {
        setGameStatus(player === 'X' ? statuses[2] : statuses[3]);
        break;
      }
    }

    //check diagonals
    if (
      gameState[0][0][1] &&
      gameState[0][0][1] === gameState[1][1][1] &&
      gameState[1][1][1] === gameState[2][2][1]
    ) {
      setGameStatus(player === 'X' ? statuses[2] : statuses[3]);
      return;
    }
    if (
      gameState[0][2][1] &&
      gameState[0][2][1] === gameState[1][1][1] &&
      gameState[1][1][1] === gameState[2][0][1]
    ) {
      setGameStatus(player === 'X' ? statuses[2] : statuses[3]);
    }
    // checkTie

    if (gameState.every((row) => row.every((el) => el[1] !== null) === true)) {
      setGameStatus(statuses[4]);
    }
  }

  return (
    <>
      <div id="article">
        <div className="status"> {gameStatus}</div>
        <button
          class="reset"
          onClick={() => {
            setGameState(initialBoard);
            setGameStatus(statuses[0]);
            setPlayer('X');
          }}
        >
          reset
        </button>
        <div>
          {gameState.map((row) => (
            <div>
              {' '}
              {row.map((sq) => (
                <Square value={sq} handleClick={handleClick} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
