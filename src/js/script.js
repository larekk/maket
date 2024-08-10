const listItems = document.querySelectorAll('.companyList__wrapper');
const service = document.querySelector('.service');
const listService = service.querySelector('.companyList__list');
const listShowButtonService = service.querySelector('.button__show');
const listCloseButtonService = service.querySelector('.button__close');
const device = document.querySelector('.devices');
const listDevice = device.querySelector('.companyList__list');
const listShowButtonDevice = device.querySelector('.button__show');
const listCloseButtonDevice = device.querySelector('.button__close');

listShowButtonService.addEventListener('click', (e) => {
    listService.classList.add('companyList__list--full');
    listShowButtonService.classList.add('none');
    listCloseButtonService.classList.remove('none');
})

listCloseButtonService.addEventListener('click', (e) => {
    listService.classList.remove('companyList__list--full');
    listShowButtonService.classList.remove('none');
    listCloseButtonService.classList.add('none');
})

listShowButtonDevice.addEventListener('click', (e) => {
  listDevice.classList.add('companyList__list--full');
  listShowButtonDevice.classList.add('none');
  listCloseButtonDevice.classList.remove('none');
})

listCloseButtonDevice.addEventListener('click', (e) => {
  listDevice.classList.remove('companyList__list--full');
  listShowButtonDevice.classList.remove('none');
  listCloseButtonDevice.classList.add('none');
})




const mediaQueryPl = window.matchMedia('(min-width: 768px) and (max-width: 1119px)')

function plScreenMedia(e) {
  if (e.matches) {
    listItems.forEach(item => {
      item.classList.remove('swiper-slide');
    })
    listShowButtonService.classList.remove('none');
    listShowButtonDevice.classList.remove('none');
  }
}

mediaQueryPl.addEventListener('change', plScreenMedia)
plScreenMedia(mediaQueryPl);


const mediaQueryComp = window.matchMedia('(min-width: 1120px)')

  function computerScreenMedia(e) {
    if (e.matches) {
      listItems.forEach(item => {
        item.classList.remove('swiper-slide');
      })

      listShowButtonService.classList.remove('none');
      listShowButtonDevice.classList.remove('none');
  }}

mediaQueryComp.addEventListener('change', computerScreenMedia)
computerScreenMedia(mediaQueryComp);

