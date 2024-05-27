import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export const initMasonryLayout = elem => {
  const msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });

  imagesLoaded(elem).on('progress', () => {
    msnry.layout();
  });
};
