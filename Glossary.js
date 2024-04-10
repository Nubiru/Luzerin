//Navigation

const open = document.getElementById('open')
const close = document.getElementById('close')
const navContainer = document.querySelector('.navigation-container')

function navigation() {
  open.addEventListener('click', () => navContainer.classList.add('show-nav'))

  close.addEventListener('click', () =>
    navContainer.classList.remove('show-nav')
  )
}

window.addEventListener('load', reading)
