modalMode ();
function modalMode() {
  let shroud = document.querySelector('.shroud')
  let sideMenu = document.querySelector('.side-menu')
  let callbackMenu = document.querySelector('.modal-callback')
  let feedbackMenu = document.querySelector('.modal-feedback')
  let callback = document.querySelectorAll('.callback')
  let feedback = document.querySelectorAll('.feedback')
  let burger = document.querySelector('.burger')
  let back = document.querySelectorAll('.back')

  burger.addEventListener('click', function () {
    i = 0;
    modalAdd(i);
  })
  callback[0].addEventListener('click', function () {
    i = 1;
    modalAdd(i);
  })
  callback[1].addEventListener('click', function () {
    i = 1;
    modalAdd(i);
  })
  feedback[0].addEventListener('click', function () {
    i = 2;
    modalAdd(i);
  })
  feedback[1].addEventListener('click', function () {
    i = 2;
    modalAdd(i);
  })
  back[0].addEventListener('click', function () {
    modalRemove();
  })
  back[1].addEventListener('click', function () {
    modalRemove();
  })
  back[2].addEventListener('click', function () {
    modalRemove();
  })
  shroud.addEventListener('click', function () {
    modalRemove();
  })

  function modalAdd(num) {
    shroud.classList.remove('shroud--hidden')
    if (num === 0) {
      sideMenu.classList.add('side-menu--active');
      } else {
        sideMenu.classList.remove('side-menu--active');
        if (num === 1) callbackMenu.classList.add('modal-callback--active');
        if (num === 2) feedbackMenu.classList.add('modal-feedback--active');
        }
  }
  function modalRemove() {
    shroud.classList.add('shroud--hidden');
    sideMenu.classList.remove('side-menu--active');
    callbackMenu.classList.remove('modal-callback--active');
    feedbackMenu.classList.remove('modal-feedback--active');
  }
}
