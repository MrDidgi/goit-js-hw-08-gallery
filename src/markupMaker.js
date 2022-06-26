export const galleryMapping = function (arr) {
    return arr.map(({preview, description, original}) => 
      `<li class='gallery__item'>
        <a href='#' class='gallery__link'>
          <img class='gallery__image' src="${preview}" alt="${description}" data-previewUrl="${original}">
        </a>
      </li>`
    ).join('');
  };