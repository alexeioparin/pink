let openMenuButton = document.querySelector('.page-header__button');
let headerMenuList = document.querySelector('.page-header__list');
let pageHeader = document.querySelector('.page-header__top');

openMenuButton.classList.remove ('page-header__button--nojs');
headerMenuList.classList.add ('visually-hidden');
pageHeader.classList.add ('page-header__top--closed');
openMenuButton.addEventListener ('click', function() {
  openMenuButton.classList.toggle('page-header__button--closed');
  pageHeader.classList.toggle('page-header__top--closed');
  headerMenuList.classList.toggle('visually-hidden');
})
