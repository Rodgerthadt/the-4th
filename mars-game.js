const player = document.getElementById('player');

let x = 0;
let y = 0;

function updatePlayerPosition() {
  player.style.left = x + 'px';
  player.style.top = y + 'px';
}

function handleKeyDown(event) {
  const stepSize = 10;
  switch (event.code) {
    case 'KeyW':
      y -= stepSize;
      break;
    case 'KeyA':
      x -= stepSize;
      break;
    case 'KeyS':
      y += stepSize;
      break;
    case 'KeyD':
      x += stepSize;
      break;
    default:
      return;
  }
  updatePlayerPosition();
}

document.addEventListener('keydown', handleKeyDown);
