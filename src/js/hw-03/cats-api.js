import { BASE_URL, API_KEY } from './config.js';
import { refs } from './index.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const toastOptions = {
  title: '❌ ',
  message: `Oops! Something went wrong! Try reloading the page!`,
  backgroundColor: 'tomato',
  icon: '',
  messageColor: 'white',
  position: 'center',
  timeout: 900,
  close: false,
  animateInside: false,
  progressBar: false,
  transitionIn: 'bounceInUp',
};
const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
};

const showErrorMsg = () => {
  refs.errorMsg.innerHTML = `<div>
    <div class="frame">
      <iframe
        src="https://giphy.com/embed/jpctIaLRTNCKKGiyPd/video"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </div>
    <p>Oops...</p>
  </div>`;
};

export const fetchBreeds = async () => {
  try {
    const response = await fetch(`${BASE_URL}/breeds`, requestOptions);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (error) {
    iziToast.error(toastOptions);
    setTimeout(showErrorMsg, 1000);
    console.log(error);
  }
};

export const fetchCatByBreed = async breedId => {
  try {
    const response = await fetch(
      `${BASE_URL}/images/search?breed_ids=${breedId}`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (error) {
    iziToast.error(toastOptions);
    setTimeout(showErrorMsg, 1000);
    console.log(error);
  }
};
