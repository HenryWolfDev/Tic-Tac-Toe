import { GameBoard } from './Game-Board.js';
import { Game } from './Game.js';

export const DisplayController = (function () {
  const boardContainer = document.getElementById('game-board');
  const formular = document.getElementById('main-menu-form');
  const menuSection = document.getElementById('main-menu-section');
  const boardSection = document.getElementById('gameboard-section');

  // Player Display HTML Elements
  const playerDisplayer = document.getElementById('player-displayer');
  const playerNameOne = document.getElementById('player-name-one');
  const playerScoreOne = document.getElementById('player-score-one');
  const playerNameTwo = document.getElementById('player-name-two');
  const playerScoreTwo = document.getElementById('player-score-two');

  //Message Display Element
  const message = document.getElementById('message-display');

  // Buttons
  const closeGameBtn = document.getElementById('close-game');

  // Player-Names
  let pOneName;
  let pTwoName;

  const init = () => {
    formular.addEventListener('submit', event => {
      event.preventDefault();
      const { 'player-one': p1, 'player-two': p2 } = Object.fromEntries(
        new FormData(event.target),
      );

      Game.init(p1, p2);
      pOneName = p1;
      pTwoName = p2;

      menuSection.classList.add('hidden');
      boardSection.classList.remove('hidden');

      message.textContent = 'Lets Play';
      renderBoard();
    });

    boardContainer.addEventListener('click', event => {
      const tile = event.target.closest('.tile-container');
      if (!tile) {
        return;
      }
      const position = tile.dataset.index;
      const state = Game.playTurn(position);

      message.textContent = state.message;

      if (state.status === 'Win' || state.status === 'Draw') {
        GameBoard.resettBoard();
        message.textContent = 'Lets Play';
      }

      renderBoard();
    });

    closeGameBtn.addEventListener('click', () => {
      Game.resettGame();
      menuSection.classList.remove('hidden');
      boardSection.classList.add('hidden');
    });
  };

  const renderBoard = () => {
    boardContainer.innerHTML = '';

    const scores = Game.getScores();

    const boardSection = document.getElementById('gameboard-section');
    boardSection.classList.add('d-flex-col-c-c');

    GameBoard.getBoard().forEach((tile, index) => {
      const tileContainer = document.createElement('div');
      tileContainer.classList.add('tile-container');
      tileContainer.dataset.index = index;

      const marker = document.createElement('span');
      marker.classList.add('tile');
      marker.textContent = tile;

      tileContainer.append(marker);
      boardContainer.appendChild(tileContainer);
    });
    playerNameOne.textContent = pOneName;
    playerNameTwo.textContent = pTwoName;
    playerScoreOne.textContent = scores.playerOne;
    playerScoreTwo.textContent = scores.playerTwo;
  };

  return {
    init,
  };
})();

DisplayController.init();
