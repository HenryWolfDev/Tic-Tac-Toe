export const GameBoard = (function () {
  const board = [null, null, null, null, null, null, null, null, null];

  const getBoard = () => board;

  const setMarker = (position, marker) => {
    if (board[position] === null) {
      board[position] = marker;
      return true;
    } else {
      return false;
    }
  };

  const resettBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = null;
    }
  };

  return {
    getBoard,
    setMarker,
    resettBoard,
  };
})();
