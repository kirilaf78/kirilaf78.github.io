const menu = document.querySelector('.menu'),
    closeElem = document.querySelector ('.close'),
    hamburger = document.querySelector ('.hamburger');

hamburger.addEventListener ('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener ('click', () => {
  menu.classList.remove('active');
});

const percent = document.querySelectorAll('.workTools__rating-percent'),
      yellowLines = document.querySelectorAll('.workTools__rating__panel__yellow');

percent.forEach((element, i)  => {
yellowLines[i].style.width = element.innerHTML;
})

