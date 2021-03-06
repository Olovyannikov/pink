

let menuToggle = document.querySelector('.navigation__button');
let menuOpen = document.querySelector('.navigation__list');
let menuWrapper = document.querySelector('.navigation__wrapper');
let navBackground = document.querySelector('.page-header__navigation');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('navigation__button--open');
    menuToggle.classList.toggle('navigation__button--close');
    menuOpen.classList.toggle('navigation__list--close');
    menuOpen.classList.toggle('navigation__list--open');
    menuWrapper.classList.toggle('navigation__wrapper--closed');
    navBackground.classList.toggle('navigation--closed');
    navBackground.classList.toggle('navigation--open');
};

let priceIndicatorFirst = document.querySelector('.price__indicator--first');
let priceIndicatorSecond = document.querySelector('.price__indicator--second');
let priceIndicatorThird = document.querySelector('.price__indicator--third');
let priceTable = document.querySelector('.table');

priceIndicatorFirst.onclick = function () {
    priceIndicatorFirst.classList.add('active');
    priceIndicatorSecond.classList.remove('active');
    priceIndicatorThird.classList.remove('active');
    priceTable.classList.add('first-table');
    priceTable.classList.remove('second-table');
    priceTable.classList.remove('third-table');
}

priceIndicatorSecond.onclick = function () {
    priceIndicatorSecond.classList.add('active');
    priceIndicatorFirst.classList.remove('active');
    priceIndicatorThird.classList.remove('active');
    priceTable.classList.add('second-table');
    priceTable.classList.remove('first-table');
    priceTable.classList.remove('third-table');
}

priceIndicatorThird.onclick = function () {
    priceIndicatorThird.classList.add('active');
    priceIndicatorSecond.classList.remove('active');
    priceIndicatorFirst.classList.remove('active');
    priceTable.classList.add('third-table');
    priceTable.classList.remove('second-table');
    priceTable.classList.remove('first-table');
}
