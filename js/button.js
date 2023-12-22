const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');
const navList = navMain.querySelector('.main-nav__list')

navMain.classList.add('main-nav--closed');
navList.style.display = 'none';

const onOpenButtonClick = () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navList.style.display = 'flex';
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navList.style.display = 'none';
  }
};

navToggle.addEventListener('click', onOpenButtonClick);

const checkScreenWidth = () => {
  if (window.innerWidth >= 1200) {
    navList.style.display = 'flex';
  } else if (!navMain.classList.contains('main-nav--opened')) {
    navList.style.display = 'none';
  }
};

window.addEventListener('resize', checkScreenWidth);

checkScreenWidth();
