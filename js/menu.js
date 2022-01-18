const menu = document.querySelector('[data-menu]')
const iconMenu = document.querySelector('[data-icon-menu]')
const iconClose = document.querySelector('[data-icon-close]')

iconMenu.addEventListener('click', () => {
  menu.classList.remove('cabecalho__menu-hidden')
  iconClose.classList.add('show')
  iconMenu.classList.remove('show')
})

iconClose.addEventListener('click', () => {
  menu.classList.add('cabecalho__menu-hidden')
  iconClose.classList.remove('show')
  iconMenu.classList.add('show')
})
