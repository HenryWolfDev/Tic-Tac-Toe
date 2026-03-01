const gameBoard = [null, null, null, null, null, null, null, null, null];

function setPlayer(playerName, marker) {
  return {
    name: playerName,
    marker: marker,
  };
}

const game = {
  playGame() {
    for (let i = 0; i <= gameBoard.length; i++) {}
  },

  setMaker(position, player) {
    gameBoard[position] = player;
  },
  checkStatus() {
    const winner = this.checkWinning();

    if (winner) {
      return `Spieler ${winner} hat gewonnen!`;
    }
    if (!gameBoard.includes(null)) {
      return 'Unentschieden!';
    }

    return 'Spiel läuft noch';
  },
  checkWinning() {
    const winning = this.winConditions.find(condition => {
      const [a, b, c] = condition;
      return (
        gameBoard[a] !== null &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      );
    });
    return winning ? gameBoard[winning[0]] : null;
  },

  resettGameBoard() {
    for (let i = 0; i < gameBoard.length; i++) {
      gameBoard[i] = null;
    }
  },
  winConditions: [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertikal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [2, 4, 6],
    [0, 4, 8],
  ],
};

const test = game.checkWinning();
console.log(gameBoard);
game.setMaker(0, 'X');
game.setMaker(1, 'X');
game.setMaker(2, 'X');
console.log(gameBoard);
game.resettGameBoard();
console.log(gameBoard);
