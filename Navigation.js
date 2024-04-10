const menuContainer = document.querySelector('.menu-container')
const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')

const mapContainer = document.querySelector('.map-container')
const mapBtns = document.querySelectorAll('.map.btn')
const cumenMapBtn = document.querySelector('.btn#cumen')
const luzerinMapBtn = document.querySelector('.btn#luzerin')
const minaUsinaMapBtn = document.querySelector('.btn#mnus')
const cllSnsMapBtn = document.querySelector('.btn#cllsns')

const chapterContainer = document.querySelector('.chapter-container')
const leftSlide = document.querySelector('.left-slide')
const capBtns = document.querySelectorAll('.btn.cap')
const rightSlide = document.querySelector('.right-slide')
const upBtn = document.querySelector('.btn#up')
const downBtn = document.querySelector('.btn#down')
const slidesLength = rightSlide.querySelectorAll('div').length

const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('#progress')

const menu = function () {
  openMenu.addEventListener('click', () =>
    menuContainer.classList.add('show-nav')
  )

  closeMenu.addEventListener('click', () =>
    menuContainer.classList.remove('show-nav')
  )

  map()
}

const map = function () {
  mapContainer.addEventListener('mouseover', (event) => {
    event.target.style.opacity = 1
  })

  mapBtns.forEach((btn) => {
    btn.style.cursor = btn.disabled == true ? 'not-allowed' : 'pointer'
    if (btn.disabled == false) {
      btn.addEventListener('mouseenter', () => {
        btn.classList.add('hover')
      })

      btn.addEventListener('mouseleave', () => {
        btn.classList.remove('hover')
      })

      btn.addEventListener('click', () => {
        mapContainer.style = 'transform: translateX(-200%);'
        chapterContainer.style = 'transform: translateX(0%);'
        chapterNavigation()
        //disable div, improve dissapear
      })
    }
  })
}

const chapterNavigation = function () {
  let activeSlideIndex = 0
  console.log(capBtns)
  leftSlide.style.top = `-${(slidesLength - 1) * 90}vh`

  upBtn.addEventListener('click', () => changeSlide('up'))
  downBtn.addEventListener('click', () => changeSlide('down'))

  //capBtns.forEach((btn) => {})

  const changeSlide = (direction) => {
    const sliderHeight = chapterContainer.clientHeight
    if (direction === 'up') {
      activeSlideIndex++
      if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0
      }
    } else if (direction === 'down') {
      activeSlideIndex--
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1
      }
    }

    leftSlide.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`

    rightSlide.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`
  }
}

window.onload = menu

//CAME FROM READING

/* const update = function () {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 0) {
    prevBtn.disabled = true
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}*/
