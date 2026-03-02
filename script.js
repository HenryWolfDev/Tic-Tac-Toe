const board = document.getElementById('game-board');

for (let i = 0; i < gameBoard.length; i++) {
  const box = document.createElement('div');
  box.classList.add('element-box');
  const element = document.createElement('span');
  element.classList.add('element');
  box.append(element);
  board.appendChild(box);

  box.addEventListener('click', () => {
    console.log('test');
  });
}
