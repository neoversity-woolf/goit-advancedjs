import { convertMs, addLeadingZero, toastOptions } from './helpers/02-helpers';
import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/airbnb.css';

let selectedDate = null;
const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timerDisplay: document.querySelectorAll('.value'),
};

flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = Date.now();
    selectedDate = selectedDates[0].getTime();

    if (currentDate >= selectedDate) {
      iziToast.info(toastOptions.caution);
      return;
    }
  },
});

const updateTimer = (timerInterval, btnStart) => {
  const now = Date.now();
  const timeDifference = selectedDate - now;

  if (timeDifference < 0) {
    clearInterval(timerInterval);
    btnStart.disabled = false;
    iziToast.success(toastOptions.valid);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  const timerItems = [
    addLeadingZero(days),
    addLeadingZero(hours),
    addLeadingZero(minutes),
    addLeadingZero(seconds),
  ];

  timerItems.forEach((value, index) => {
    refs.timerDisplay[index].textContent = value;
  });
};

refs.startBtn.addEventListener('click', event => {
  if (!selectedDate) {
    iziToast.info(toastOptions.invalid);
    return;
  }

  const btnStart = event.currentTarget;
  btnStart.disabled = true;

  const timerInterval = setInterval(() => {
    updateTimer(timerInterval, btnStart);
  }, 1000);
});
