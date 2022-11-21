import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const listGallery = document.querySelector(".gallery");
const markUp = doGallery(galleryItems);
listGallery.innerHTML = markUp;
function doGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>`;
    })
    .join("");
}

const lightBox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: `alt`,
});
