// // Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const gallery = createGallery(galleryItems);

galleryContainer.innerHTML = gallery;

let instance = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: 300,
});

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
		    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
	      </a>
        </div>`;
    })
    .join('');
}
