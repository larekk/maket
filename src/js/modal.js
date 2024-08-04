const dropMenu = document.querySelector(".dropMenu");
const dropMenuModal = dropMenu.querySelector(".dropMenu__modal");
const burgerOpen = document.querySelector(".button__burgerOpen");
const burgerClose = dropMenu.querySelector(".button__burgerClose");
const buttonTel = dropMenu.querySelector(".button__tel");
const buttonChat = dropMenu.querySelector(".button__chat");

const modalContact = document.querySelector(".modalContact");
const modalContactTitle = modalContact.querySelector(".main__title");
const modalContactModal = modalContact.querySelector(".modalContact__modal");
const burgerModalContactCloses = modalContact.querySelectorAll(".button__burgerClose");
const inputName = modalContact.querySelector(".input__name");
const inputMail = modalContact.querySelector(".input__mail");
const inputText = modalContact.querySelector(".input__text");





burgerOpen.addEventListener('click', e => {
  dropMenu.classList.remove('dropMenu--hidden');
  dropMenuModal.classList.add('dropMenu__modal--active');
})

burgerClose.addEventListener('click', e => {
  dropMenu.classList.add('dropMenu--hidden');
  dropMenuModal.classList.remove('dropMenu__modal--active');
})

dropMenuModal.addEventListener('click', e => {
  dropMenu.classList.add('dropMenu--hidden');
  dropMenuModal.classList.remove('dropMenu__modal--active');
})

buttonChat.addEventListener('click', e => {
  dropMenu.classList.add('dropMenu--hidden');
  modalContact.classList.remove('modalContact--hidden');
  modalContactTitle.textContent = 'Обратная связь';
})

buttonTel.addEventListener('click', e => {
  dropMenu.classList.add('dropMenu--hidden');
  modalContact.classList.remove('modalContact--hidden');
  inputName.classList.add('input--hidden');
  inputMail.classList.add('input--hidden');
  inputText.classList.add('input--hidden');
  modalContactTitle.textContent = 'Заказать звонок';
})

burgerModalContactCloses.forEach(cont => {
  cont.addEventListener('click', e => {
    modalContact.classList.add('modalContact--hidden');
    inputName.classList.remove('input--hidden');
    inputMail.classList.remove('input--hidden');
    inputText.classList.remove('input--hidden');
  })
})

modalContactModal.addEventListener('click', e => {
  modalContact.classList.add('modalContact--hidden');
  inputName.classList.remove('input--hidden');
  inputMail.classList.remove('input--hidden');
  inputText.classList.remove('input--hidden');
})



const dropMenuMedia = window.matchMedia('(max-width: 1439px)')

function dropMenuMediaHandler(e) {
  if (e.matches) {
    dropMenu.classList.add('dropMenu--hidden');
  } else {
    dropMenu.classList.remove('dropMenu--hidden');
    dropMenuModal.classList.remove('dropMenu__modal--active');
  }
}

dropMenuMedia.addEventListener('change', dropMenuMediaHandler)
dropMenuMediaHandler(dropMenuMedia);
