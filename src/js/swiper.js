import Swiper from 'swiper/swiper-bundle.min.mjs';

const mediaQueryMobile = window.matchMedia('(max-width: 768px)')
if (mediaQueryMobile.matches) {
  new Swiper('.swiper', {

    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    watchOverflow: true,
    initialSlide: 0,
    breakpoints: {
      767: {
        initialSlide: 0,
      }
    }
  });
}
