import { fetchImages } from './images-api/pixabay-service.js';
import { createImagesMarkup } from './helpers/createImagesmarkup.js';
import { initMasonryLayout } from './helpers/initMasonryLayout.js';

import 'bootstrap/scss/bootstrap.scss';
import '../../css/hw-04.css';

const refs = {
  searchForm: document.forms.searchForm,
  container: document.querySelector('.grid[data-masonry]'),
  loadMoreBtn: document.querySelector('[data-load-more]'),
};

const queryParams = {
  currentPage: 1,
  searchQuery: '',
};

const onSearchFormSubmit = async event => {
  event.preventDefault();
  const form = event.currentTarget;
  queryParams.searchQuery = form.elements.searchInput.value;
  try {
    refs.container.innerHTML = `<div class="grid-sizer"></div>`;
    const { hits } = await fetchImages(queryParams);

    refs.container.insertAdjacentHTML('beforeend', createImagesMarkup(hits));
    initMasonryLayout(refs.container);
    setTimeout(() => {
      refs.loadMoreBtn.classList.toggle('d-none');
    }, 500);
  } catch (error) {
    console.log(error);
  } finally {
    form.reset();
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    queryParams.currentPage += 1;
    const { hits } = await fetchImages(queryParams);
    refs.container.insertAdjacentHTML('beforeend', createImagesMarkup(hits));
    initMasonryLayout(refs.container);
  } catch (error) {
    console.log(error);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
