import { GameBoard } from './Game-Board.js';
import { Game } from './Game.js';
import { Player } from '../factory/Player.js';

export const DisplayController = (function () {
  let playerNameOne;
  let playerNameTwo;
  const init = () => {
    const formular = document.getElementById('main-menu-form');
    const menuSection = document.getElementById('main-menu-section');
    const boardSection = document.getElementById('gameboard-section');

    formular.addEventListener('submit', event => {
      event.preventDefault();
      const { 'player-one': pOneName, 'player-two': pTwoName } =
        Object.fromEntries(new FormData(event.target));
      playerNameOne = pOneName;
      playerNameTwo = pTwoName;
      Game.init(pOneName, pTwoName);

      menuSection.classList.add('hidden');
      boardSection.classList.remove('hidden');

      renderBoard();
    });
  };

  const renderBoard = () => {
    const boardContainer = document.getElementById('game-board');
    boardContainer.innerHTML = '';
    const boardSection = document.getElementById('gameboard-section');
    boardSection.classList.add('d-flex-col-c-c');

    GameBoard.getBoard().forEach((tile, index) => {
      const tileContainer = document.createElement('div');
      tileContainer.classList.add('tile-container');
      tileContainer.dataset.index = index;

      const marker = document.createElement('span');
      marker.classList.add('tile');

      tileContainer.append(marker);
      boardContainer.appendChild(tileContainer);
    });

    const playersContainer = document.createElement('div');
    playersContainer.classList.add('players-info');

    const pOneContainer = document.createElement('div');
    pOneContainer.classList.add('player-name-score');
    const pNameOne = document.createElement('span');
    pNameOne.textContent = playerNameOne;
    const pScoreOne = document.createElement('span');
    pScoreOne.textContent = '0';

    pOneContainer.append(pNameOne);
    pOneContainer.append(pScoreOne);

    const pTwoContainer = document.createElement('div');
    pTwoContainer.classList.add('player-name-score');
    const pNameTwo = document.createElement('span');
    pNameTwo.textContent = playerNameTwo;
    const pScoreTwo = document.createElement('span');
    pScoreTwo.textContent = '0';

    pTwoContainer.append(pNameTwo);
    pTwoContainer.append(pScoreTwo);

    playersContainer.append(pOneContainer);
    playersContainer.append(pTwoContainer);

    boardSection.appendChild(playersContainer);
  };

  return {
    init,
  };
})();

DisplayController.init();
