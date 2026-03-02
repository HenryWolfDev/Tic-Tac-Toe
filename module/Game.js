import { Player } from '../factory/Player.js';
import { GameBoard } from './Game-Board.js';

const Game = (function () {
  let playerOne;
  let playerTwo;
  let activePlayer;

  const init = (PlayerNameOne, PlayerNameTwo) => {
    playerOne = Player(PlayerNameOne, 'X');
    playerTwo = Player(PlayerNameTwo, 'O');
    activePlayer = playerOne;
  };

  const winConditions = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [2, 4, 6],
    [0, 4, 8],
  ];

  const playTurn = position => {
    if (checkWinning(GameBoard.getBoard()).status !== 'Game is still running') {
      return;
    }

    if (GameBoard.setMarker(position, activePlayer.marker)) {
      const result = checkWinning(GameBoard.getBoard());

      if (result.status === 'Win') {
        activePlayer.setPoints();
      }

      if (result.status === 'Game is still running') {
        toggleActivePlayer();
      }
      return result;
    }
  };

  const toggleActivePlayer = () => {
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
  };

  const checkWinning = board => {
    const winning = winConditions.find(condition => {
      const [a, b, c] = condition;
      return (
        board[a] !== null && board[a] === board[b] && board[a] === board[c]
      );
    });
    if (winning) {
      return {
        status: 'Win',
        winner: board[winning[0]],
        scores: {
          playerOne: playerOne.getScore(),
          playerTwo: playerTwo.getScore(),
        },
      };
    }
    if (!board.includes(null)) {
      return {
        status: 'Draw',
        winner: null,
        scores: {
          playerOne: playerOne.getScore(),
          playerTwo: playerTwo.getScore(),
        },
      };
    }

    return {
      status: 'Game is still running',
      winner: null,
      scores: {
        playerOne: playerOne.getScore(),
        playerTwo: playerTwo.getScore(),
      },
    };
  };

  const resettGame = () => {
    GameBoard.resettBoard();
    activePlayer = playerOne;
  };

  return {
    init,
    playTurn,
    resettGame,
  };
})();
