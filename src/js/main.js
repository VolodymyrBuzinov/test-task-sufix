import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide('#image-slider', { autoplay: true, pauseOnHover: true,interval: 2000} ).mount();
} );
if (window.matchMedia('(min-width: 320px)').matches) {	
	new Splide('#img-slider', { autoplay: true, pauseOnHover: false, interval: 2000, perPage: 1} ).mount();
}
if (window.matchMedia('(min-width: 768px)').matches) {	
	new Splide('#img-slider', { autoplay: true, pauseOnHover: false, interval: 2000, perPage: 2} ).mount();
}
if (window.matchMedia('(min-width: 1280px)').matches) {	
	new Splide('#img-slider', { autoplay: true, pauseOnHover: false, interval: 2000, perPage: 4} ).mount();
}
const prodButton = document.getElementById('js-prod-button');
const contButton = document.getElementById('js-cont-button');
const prod = document.getElementById('js-prod');
const foot = document.getElementById('js-foot');
const button = document.querySelector('.js-button-up');
document.addEventListener('click', evt => {
    evt.preventDefault();    
    if (evt.target === button) {
        window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
    }
    if (evt.target === prodButton) {        
        prod.scrollIntoView({
            behavior: 'smooth',
        });
    }
    if (evt.target === contButton) {        
        foot.scrollIntoView({
            behavior: 'smooth',
        });
    }
})
window.addEventListener('scroll', evt => {
    if (pageYOffset < 600) {
        button.style.opacity = 0;
    }
    if (pageYOffset >= 600) {
        button.style.opacity = 1;
    }
});


