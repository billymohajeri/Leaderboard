import './index.css';
import refreshFunc from './modules/refresh.js';
import addFunc from './modules/add.js';

window.addEventListener('load', () => {
  refreshFunc();
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  refreshFunc();
});

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', (e) => {
  const textBoxes = document.getElementsByClassName('input-text');
  const user = textBoxes[0].value;
  const score = parseInt(textBoxes[1].value, 10);
  const textBoxesHaveValue = user && score;
  if (textBoxesHaveValue) {
    addFunc(user, score);
  }
  e.preventDefault();
  refreshFunc();
});
