import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listGallery = document.querySelector(".gallery");
const markUp = createGalery(galleryItems);
listGallery.innerHTML = markUp;
function createGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>`;
    })
    .join("");
}
const imgs = document.querySelector(".gallery__image");
listGallery.addEventListener("click", showModal);
function showModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const example = basicLightbox.create(
    `
        <img src="${evt.target.dataset.source}" alt="${evt.target.alt}">
    `
  );

  example.show();
}
