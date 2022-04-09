// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const galleryListItems = createGalleryItems(galleryItems);


galleryListEl.insertAdjacentHTML('beforeend', galleryListItems);

galleryListEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName === 'IMG') {
        let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250', });  

lightbox.on('show.simplelightbox', function () {

});

lightbox.on('error.simplelightbox', function (e) {
	console.log(e);
});
    }

})



function createGalleryItems(imagesArray) {   
    return imagesArray.map(el => `<a class="gallery__item" href="${el.original}"><img class="gallery__image" src="${el.preview}" alt="${el.description}"></a>`
    ).join('')
}