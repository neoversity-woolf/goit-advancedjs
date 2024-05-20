import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

import 'the-new-css-reset/css/reset.css';

window.onload = () => {
  const PLAYER_KEY = 'videoplayer-current-time';
  const WAIT = 1000;
  const player = new Player('vimeo-player');
  player.setColor('#ffb510');

  const currentTime = JSON.parse(localStorage.getItem(PLAYER_KEY)) || 0;

  const saveCurrentTime = ({ seconds }) => {
    try {
      const normalize_duration = JSON.stringify(Math.floor(seconds));
      localStorage.setItem(PLAYER_KEY, normalize_duration);
    } catch (error) {
      console.log(error.message);
    }
  };

  player.on('timeupdate', throttle(saveCurrentTime, WAIT));
  player.setCurrentTime(currentTime);
};
