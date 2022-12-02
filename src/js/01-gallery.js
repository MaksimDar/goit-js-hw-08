// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const gallery = createGallery(galleryItems);

galleryContainer.innerHTML = gallery;
galleryContainer.addEventListener('click', clickOnGallery);

let lightbox = $('.gallery a').simpleLightbox({
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: 250,
});
// function clickOnGallery(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   console.log(event.target.nodeName);

//   const instance = basicLightbox.create(
//     `
//       <div class="modal">
//          <img src="${event.target.dataset.source}" alt="Big Pictures" width="800" height="600">
//       </div>
//   `,
//     {
//       onShow: instance => {
//         galleryContainer.addEventListener('keyup', closeButton);
//       },
//       onClose: instance => {
//         galleryContainer.removeEventListener('keyup', closeButton);
//       },
//     }
//   );

//   function closeButton(event) {
//     if (event.key === 'Escape') {
//       instance.close();
//     }
//   }

//   instance.show();
// }

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
