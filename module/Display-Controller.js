import { GameBoard } from './Game-Board.js';
import { Game } from './Game.js';

export const DisplayController = (function () {
  const init = () => {
    const formular = document.getElementById('main-menu-form');
    const mainMenu = document.getElementById('main-menu-section');
    const gameBoard = document.getElementById('gameboard-section');

    formular.addEventListener('submit', event => {
      event.preventDefault();
      const { 'player-one': pOneName, 'player-two': pTwoName } =
        Object.fromEntries(new FormData(event.target));
      Game.init(pOneName, pTwoName);

      mainMenu.classList.add('hidden');
      gameBoard.classList.remove('hidden');
    });
  };

  return {
    init,
  };
})();

DisplayController.init();
