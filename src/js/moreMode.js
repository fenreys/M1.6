moreMode();
function moreMode() {
  let moreIc = document.querySelectorAll('.more__button-icon');
  let moreText = document.querySelectorAll('.more__button-text');
  let fullObject = document.querySelectorAll('.main__about-company .text, .swiper-wrapper');
  let showMore = document.querySelectorAll('.more');

  showMore[0].addEventListener('click', function() {
    i = 0;
    getMore(i)
  })
  showMore[1].addEventListener('click', function() {
    i = 1;
    getMore(i)
  })
  showMore[2].addEventListener('click', function() {
    i = 2;
    getMore(i)
  })

  function getMore(num) {
    fullObject[num].classList.toggle('more--full');
    moreIc[num].classList.toggle('rotate');
      if (moreText[num].textContent === 'Скрыть') {
        if (num === 0) {
          moreText[num].textContent = 'Читать далее';
        } else {
          moreText[num].textContent = 'Показать все';
          }
      } else {
          moreText[num].textContent = 'Скрыть';
        }
    }
}
