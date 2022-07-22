import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

console.log(createGalleryItemsMarkup(galleryItems));

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
function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryEl = evt.target.nodeName === "IMG";
  if (!isGalleryEl) {
    return;
  } else {
    const primaryImage = evt.target.dataset.source;
    const openingImage = createOpeningImageMurkup(primaryImage);

    openingImage.show();
  }
  //console.log(evt.target.dataset.source);
}

function createOpeningImageMurkup(src) {
  const onOpen = basicLightbox.create(
    `
    <img src=${src} width="800" height="600">`,
    {
      onShow: (onOpen) => {
        window.addEventListener("keydown", onClickEscape);
      },

      onClose: (onOpen) => {
        window.addEventListener("keydown", onClickEscape);
      },
    }
  );
  function onClickEscape(evt) {
    if (evt.code === "Escape") {
      onOpen.close();
    } else {
      return;
    }
  }
  return onOpen;
}
