import { toastOptions } from './helpers/03-helpers';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const onFormSubmit = event => {
  event.preventDefault();
  const form = event.currentTarget;
  const { delay, step, amount } = form.elements;

  for (let i = 1; i <= +amount.value; i += 1) {
    const timeout = +delay.value + +step.value * i;
    createPromise(i, timeout)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        iziToast.success({
          title: '✅ ',
          message: `Fulfilled promise ${position} in ${delay}ms`,
          backgroundColor: 'lightgreen',
          ...toastOptions,
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        iziToast.error({
          title: '❌ ',
          message: `Rejected promise ${position} in ${delay}ms`,
          backgroundColor: 'tomato',
          ...toastOptions,
        });
      });
  }

  form.reset();
};

form.addEventListener('submit', onFormSubmit);
