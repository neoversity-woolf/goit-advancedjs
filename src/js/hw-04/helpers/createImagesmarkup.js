export const createImagesMarkup = data => {
  return data.reduce((markup, hit) => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = hit;
    return (markup += `<div class="grid-item">
        <img
          src=${webformatURL}
        />
      </div>`);
  }, '');
};
