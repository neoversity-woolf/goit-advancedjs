import { fetchBreeds, fetchCatByBreed } from './cats-api.js';
import SlimSelect from 'slim-select';

import 'slim-select/styles';

const refs = {
  select: document.querySelector('select.breed-select'),
  cardWrapper: document.querySelector('.cat-info'),
  backdrop: document.querySelector('.backdrop'),
};
const createPptionsMarkup = data => {
  return data.reduce((markup, { name, id }) => {
    return (markup += `<option value="${id}">${name}</option>`);
  }, '');
};
const onSelectChange = async event => {
  const selectedOptionValue = event.currentTarget.value;
  const response = await fetchCatByBreed(selectedOptionValue);
  const catInfo = response[0];
  console.log('onSelectChange  response:', catInfo);
};

const breeds = await fetchBreeds();
refs.backdrop.classList.toggle('is-hidden');
const optionsMarkup = await createPptionsMarkup(breeds);
refs.select.innerHTML = optionsMarkup;
new SlimSelect({
  select: 'select.breed-select',
});

refs.select.addEventListener('change', onSelectChange);
