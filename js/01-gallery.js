import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)

//console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
    })
    .join("");
  console.log(murkup);
}
function onGalleryContainerClick (evt){
console.log(evt.target)
}