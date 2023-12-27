const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureClose = bigPictureContainer.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img');
const fullscreenTriggers = document.querySelectorAll('.js-fullscreen-trigger');
const prevButton = document.querySelector('.big-picture__slider-button--prev');
const nextButton = document.querySelector('.big-picture__slider-button--next');


document.addEventListener('DOMContentLoaded', (event) => {
  const images = Array.from(fullscreenTriggers).map(trigger => trigger.src);
let currentIndex = 0;

const isEscapeKey = (evt) => evt.key === 'Escape';
const isLeftArrowKey = (evt) => evt.key === 'ArrowLeft';
const isRightArrowKey = (evt) => evt.key === 'ArrowRight';

const updateButtonsState = () => {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
};

const openBigPicture = (index) => {
  bigPictureImage.src = images[index];
  bigPictureContainer.classList.remove('visually-hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  updateButtonsState();
};

const closeBigPicture = () => {
  bigPictureContainer.classList.add('visually-hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const navigateSlider = (direction) => {
  if (direction === 'prev' && currentIndex > 0) {
    openBigPicture(--currentIndex);
  } else if (direction === 'next' && currentIndex < images.length - 1) {
    openBigPicture(++currentIndex);
  }
};


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  } else if (isLeftArrowKey(evt)) {
    navigateSlider('prev');
  } else if (isRightArrowKey(evt)) {
    navigateSlider('next');
  }
};

fullscreenTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    currentIndex = index;
    openBigPicture(currentIndex);
  });
});

prevButton.addEventListener('click', () => navigateSlider('prev'));
nextButton.addEventListener('click', () => navigateSlider('next'));

bigPictureClose.addEventListener('click', closeBigPicture);

updateButtonsState();

});
