const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureClose = bigPictureContainer.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img');
const fullscreenTriggers = document.querySelectorAll('.js-fullscreen-trigger');

const isEscapeKey = (evt) => evt.key === 'Escape';

fullscreenTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const src = trigger.getAttribute('src');
    openBigPicture(src);
  });
});

function openBigPicture(src) {
  bigPictureImage.src = src;
  bigPictureContainer.classList.remove('visually-hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture() {
  bigPictureContainer.classList.add('visually-hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

bigPictureClose.addEventListener('click', closeBigPicture);
