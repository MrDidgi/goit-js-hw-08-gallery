

import {galleryItems} from "../src/object";

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image, 
// это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.



//   ------------- создание разметки для картинок и их внедрение -------------
import {galleryMapping} from "../src/markupMaker";

const markupToAppend = galleryMapping(galleryItems);

const ulElement = document.querySelector('.gallery.js-gallery');

ulElement.innerHTML = markupToAppend;

const divLightbox = document.querySelector('div.lightbox');

const imgModal = document.querySelector('img.lightbox__image');


//   ------------- модальное окно (превью картинки) -------------
const imagePreview = function (event) {
  
    if (!event.target.classList.contains('gallery__image')) {
      return; 
    }
    
    if (divLightbox.classList.contains('is-open')) {
      return
    }

   //  ------------- подстановка картинки в модалку -------------
    imgModal.setAttribute("src", event.target.dataset.previewurl);
    imgModal.setAttribute("alt", event.target.description)

    divLightbox.classList.add('is-open');
};

ulElement.addEventListener('click', imagePreview);

//  ------------- закрытие модального окна по кнопке -------------
const closeButton = document.querySelector('button.lightbox__button');

const closeModal = function (event) {
  if (!event.target.classList.contains('lightbox__button')) {
    return; 
  } 
  divLightbox.classList.remove('is-open');
  imgModal.setAttribute("src", '');
  imgModal.setAttribute("alt", ''); 
 
};

closeButton.addEventListener('click', closeModal);




