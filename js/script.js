/***** Show - Hide Search Container Starts *****/
const searchContainer = document.querySelector('#search__container');
const btnSearch = document.querySelector('#btn__search');


btnSearch.addEventListener('click', () => {
  searchContainer.classList.toggle('show__search');
  console.log('click')
});
/***** Show - Hide Search Container Ends *****/

/***** Show - Hide Login Form Container Starts *****/
const loginFormContainer = document.querySelector('#form__container');

function toggleLoginForm() {
  loginFormContainer.classList.toggle('show__form');
}

document.querySelector('#btn__login').addEventListener('click', toggleLoginForm);
document.querySelector('#btn__close').addEventListener('click', toggleLoginForm);
/***** Show - Hide Login Form Container Ends *****/

/***** Scroll Navigarion Bar Starts *****/
const navigationBar = document.querySelector('#nav__bar');

window.onscroll = () => {
  if (this.innerWidth > 799) {
    this.scrollY > 20 ? navigationBar.classList.add('scroll__bar') : navigationBar.classList.remove('scroll__bar');
  }
}
/***** Scroll Navigarion Bar Ends *****/

/***** Slider Effect Starts *****/
function NextSliderItem(sliderName, itemName) {
  let slider = document.querySelector(sliderName);
  console.log(slider);

  slider.style.transition = 'margin 0.6s ease';
  slider.style.marginLeft = '-200%';

  let sliderItemFirst = document.querySelectorAll(itemName)[0];
  console.log(sliderItemFirst);

  setTimeout(function () {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', sliderItemFirst);
    slider.style.marginLeft = '-100%';
  }, 600);
}

function PrevieusSliderItem(sliderName, itemName) {
  let slider = document.querySelector(sliderName);
  console.log(slider);

  slider.style.transition = 'margin 0.6s ease';
  slider.style.marginLeft = '0px';

  let sliderItems = document.querySelectorAll(itemName);
  let sliderItemLast = sliderItems[sliderItems.length - 1];
  console.log(sliderItemLast);

  setTimeout(function () {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderItemLast);
    slider.style.marginLeft = '-100%';
  }, 600);
}

/* Hero Slider Starts */
document.querySelector('.hero__slider #btn__right').addEventListener('click', function () {
  NextSliderItem('.hero__slider #slider', '.hero__slider #slider__item');
});

document.querySelector('.hero__slider #btn__left').addEventListener('click', function () {
  PrevieusSliderItem('.hero__slider #slider', '.hero__slider #slider__item');
});

setInterval(() => {
  NextSliderItem('.hero__slider #slider', '.hero__slider #slider__item');
}, 4000);
/* Hero Slider Ends */

/* Featured Slider Starts */
document.querySelector('.featured__slider #btn__right').addEventListener('click', function () {
  NextSliderItem('.featured__slider #slider', '.featured__slider #slider__item');
});

document.querySelector('.featured__slider #btn__left').addEventListener('click', function () {
  PrevieusSliderItem('.featured__slider #slider', '.featured__slider #slider__item');
});
/* Featured Slider Ends */

/* Arrivals Slider Starts */
document.querySelector('.arrivals__slider #btn__right').addEventListener('click', function () {
  NextSliderItem('.arrivals__slider #slider', '.arrivals__slider #slider__item');
});

document.querySelector('.arrivals__slider #btn__left').addEventListener('click', function () {
  PrevieusSliderItem('.arrivals__slider #slider', '.arrivals__slider #slider__item');
});

setInterval(() => {
  NextSliderItem('.arrivals__slider #slider', '.arrivals__slider #slider__item');
}, 8000);

document.querySelector('.arrivals__slider2 #btn__right2').addEventListener('click', function () {
  NextSliderItem('.arrivals__slider2 #slider2', '.arrivals__slider2 #slider__item2');
});

document.querySelector('.arrivals__slider2 #btn__left2').addEventListener('click', function () {
  PrevieusSliderItem('.arrivals__slider2 #slider2', '.arrivals__slider2 #slider__item2');
});

setInterval(() => {
  NextSliderItem('.arrivals__slider2 #slider2', '.arrivals__slider2 #slider__item2');
}, 6500);
/* Arrivals Slider Ends */

/* Reviews Slider Starts */
document.querySelector('.reviews__slider #btn__right').addEventListener('click', function () {
  NextSliderItem('.reviews__slider #slider', '.reviews__slider #slider__item');
});

document.querySelector('.reviews__slider #btn__left').addEventListener('click', function () {
  PrevieusSliderItem('.reviews__slider #slider', '.reviews__slider #slider__item');
});
/* Reviews Slider Ends */

/* Blogs Slider Starts */
document.querySelector('.blogs__slider #btn__right').addEventListener('click', function () {
  NextSliderItem('.blogs__slider #slider', '.blogs__slider #slider__item');
});

document.querySelector('.blogs__slider #btn__left').addEventListener('click', function () {
  PrevieusSliderItem('.blogs__slider #slider', '.blogs__slider #slider__item');
});
/* Blogs Slider Ends */
/***** Slider Effect Ends *****/

/***** Loader Effect Starts *****/
const loader = document.querySelector('#loader');

function loaderEffect() {
  loader.style.display = 'none';
  document.body.style.overflowY = 'visible';
}

setTimeout(() => {
  loaderEffect();
}, 5000);
/***** Loader Effect Ends *****/