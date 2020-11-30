import Key from './js/Key.js';

const keysw = [
  {code: 65, symbol: 'A', sound: 'clap'},
  {code: 65, symbol: 'A', sound: 'clap'},
  {code: 65, symbol: 'A', sound: 'clap'},
  {code: 65, symbol: 'A', sound: 'clap'},
  {code: 65, symbol: 'A', sound: 'clap'}
]

const appElement = document.querySelector('.app');

keysw.forEach(key => {
  const keyComponent = new Key(key);
  appElement.append(keyComponent.getTemplate());
})

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);