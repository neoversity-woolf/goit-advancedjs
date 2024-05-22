export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export function addLeadingZero(value) {
  try {
    const stringifyValue = String(value);
    return stringifyValue.padStart(2, '0');
  } catch (error) {
    console.error('The incoming parameter is not of type string');
  }
}

export const toastOptions = {
  invalid: {
    message: 'Please select a date and time first.',
    position: 'topRight',
    timeout: 2000,
    progressBar: false,
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutUp',
  },
  valid: {
    message: 'Time is up!',
    position: 'topRight',
    timeout: 5000,
    progressBar: false,
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutUp',
  },
  caution: {
    message: 'Please choose a date in the future',
    position: 'topRight',
    timeout: 2000,
    progressBar: false,
    transitionIn: 'bounceInDown',
    transitionOut: 'fadeOutUp',
  },
};
