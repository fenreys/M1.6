// SWIPER
import Swiper from "./swiper.min.js";
if (window.matchMedia('(max-width: 767px)').matches) {
  let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  })
}
