let menuToggle = document.querySelector('.nav__button--open');
let menuOpen = document.querySelector('.nav__list');
menuToggle.onclick = function() {
  menuToggle.classList.toggle('nav__button--close');
  menuToggle.classList.toggle('nav__button--open');
  menuOpen.classList.toggle('nav__list--close');
}
