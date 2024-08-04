const service = document.querySelector('.service');
const listItemsService = service.querySelectorAll('.companyList__wrapper');
const listShowButtonService = service.querySelector('.button__show');
const listCloseButtonService = service.querySelector('.button__close');
const device = document.querySelector('.devices');
const listItemsDevice = device.querySelectorAll('.companyList__wrapper');
const listShowButtonDevice = device.querySelector('.button__show');
const listCloseButtonDevice = device.querySelector('.button__close');

listShowButtonService.addEventListener('click', (e) => {
	for(let i = 0; i < listItemsService.length; i++) {
		listItemsService[i].classList.remove('none');
		listShowButtonService.classList.add('none');
		listCloseButtonService.classList.remove('none');
	}
})

listShowButtonDevice.addEventListener('click', (e) => {
  for(let i = 0; i < listItemsService.length; i++) {
    listItemsDevice[i].classList.remove('none');
    listShowButtonDevice.classList.add('none');
    listCloseButtonDevice.classList.remove('none');
  }
})


const mediaQueryPl = window.matchMedia('(min-width: 768px) and (max-width: 1119px)')

function plScreenMedia(e) {
  if (e.matches) {
    for(let i = 0; i < listItemsService.length; i++) {
      listItemsService[i].classList.remove('swiper-slide');
    }

    for(let i = 0; i < listItemsDevice.length; i++) {
      listItemsDevice[i].classList.remove('swiper-slide');
    }

    for(let i = 0; i < listItemsService.length; i++) {
      listItemsService[i].classList.remove('none');
    }

    for(let i = 0; i < listItemsDevice.length; i++) {
      listItemsDevice[i].classList.remove('none');
    }

    for(let i = 6; i < listItemsService.length; i++) {
      listItemsService[i].classList.add('none');
    }

    for(let i = 3; i < listItemsDevice.length; i++) {
      listItemsDevice[i].classList.add('none');
    }

    listCloseButtonService.addEventListener('click', (e) => {
      for(let i = 6; i < listItemsService.length; i++) {
        listItemsService[i].classList.add('none');
        listShowButtonService.classList.remove('none');
        listCloseButtonService.classList.add('none');
      }
    })
    listCloseButtonDevice.addEventListener('click', (e) => {
      for(let i = 3; i < listItemsDevice.length; i++) {
        listItemsDevice[i].classList.add('none');
        listShowButtonDevice.classList.remove('none');
        listCloseButtonDevice.classList.add('none');
      }
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

      for(let i = 0; i < listItemsService.length; i++) {
        listItemsService[i].classList.remove('none');
      }

      for(let i = 0; i < listItemsDevice.length; i++) {
        listItemsDevice[i].classList.remove('none');
      }

    for(let i = 8; i < listItemsService.length; i++) {
      listItemsService[i].classList.add('none');
    }

      for(let i = 4; i < listItemsDevice.length; i++) {
        listItemsDevice[i].classList.add('none');
      }

      listCloseButtonService.addEventListener('click', (e) => {
        for(let i = 8; i < listItemsService.length; i++) {
          listItemsService[i].classList.add('none');
          listShowButtonService.classList.remove('none');
          listCloseButtonService.classList.add('none');
        }
      })

      listCloseButtonDevice.addEventListener('click', (e) => {
        for(let i = 4; i < listItemsDevice.length; i++) {
          listItemsDevice[i].classList.add('none');
          listShowButtonDevice.classList.remove('none');
          listCloseButtonDevice.classList.add('none');
        }
      })
      listShowButtonService.classList.remove('none');
      listShowButtonDevice.classList.remove('none');
  }}

mediaQueryComp.addEventListener('change', computerScreenMedia)
computerScreenMedia(mediaQueryComp);

