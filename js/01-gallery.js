import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector("div.gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

function createGalleryMarkup(galleryPhotos) {
    return galleryPhotos
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
            </div>`
        })
        .join('');
}

galleryContainer.addEventListener("click", (evt) => {
    evt.preventDefault();

    const imgOriginalLink = evt.target.dataset.source;

     if (!evt.target.classList.contains('gallery__image')) {
        return
    };
    const instance = basicLightbox.create(`
        <img src="${imgOriginalLink}" width="800" height="600">
    `)

    instance.show()

    galleryContainer.addEventListener("keydown", (evt) => { 
    if (evt.key === 'Escape') {
        instance.close();
    }
})
})
    

