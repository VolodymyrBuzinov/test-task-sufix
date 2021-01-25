"use strict";

var _splide = _interopRequireDefault(require("@splidejs/splide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  new _splide["default"]('#image-slider', {
    autoplay: true,
    pauseOnHover: true,
    interval: 2000
  }).mount();
});

if (window.matchMedia('(min-width: 320px)').matches) {
  new _splide["default"]('#img-slider', {
    autoplay: true,
    pauseOnHover: false,
    interval: 2000,
    perPage: 1
  }).mount();
}

if (window.matchMedia('(min-width: 768px)').matches) {
  new _splide["default"]('#img-slider', {
    autoplay: true,
    pauseOnHover: false,
    interval: 2000,
    perPage: 2
  }).mount();
}

if (window.matchMedia('(min-width: 1280px)').matches) {
  new _splide["default"]('#img-slider', {
    autoplay: true,
    pauseOnHover: false,
    interval: 2000,
    perPage: 4
  }).mount();
}

var prodButton = document.getElementById('js-prod-button');
var contButton = document.getElementById('js-cont-button');
var prod = document.getElementById('js-prod');
var foot = document.getElementById('js-foot');
var button = document.querySelector('.js-button-up');
document.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (evt.target === button) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (evt.target === prodButton) {
    prod.scrollIntoView({
      behavior: 'smooth'
    });
  }

  if (evt.target === contButton) {
    foot.scrollIntoView({
      behavior: 'smooth'
    });
  }
});
window.addEventListener('scroll', function (evt) {
  if (pageYOffset < 600) {
    button.style.opacity = 0;
  }

  if (pageYOffset >= 600) {
    button.style.opacity = 1;
  }
});