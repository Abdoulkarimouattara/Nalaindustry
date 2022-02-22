
let icon_open = document.querySelector('.navbar-toggler'),
    body = document.body,
    banniere = document.querySelector('.banniere')
    p = document.querySelector('.main'),
    nav = document.querySelector('nav.navbar'),
    ul = document.querySelector(' ul.navbar-nav'),
    logo = document.querySelector('.logo'),
    div = document.querySelector('.collapse div'),
    s = document.querySelector('.slider-btns')



var sildes = document.querySelectorAll('.carousel-item'),
    icons = document.querySelectorAll('.fas'),
    carouselCount = 0,
    scrollInterval,
    intervall = 5000,
    paragraph = document.querySelectorAll('.carousel-title'),
    button = document.querySelectorAll('.carousel-button')


icons[0].addEventListener('click', (e) => {
    carouselCount -= 100
    slider()
    if(e.type !== 'autoClick') {
        clearInterval(scrollInterval)
        scrollInterval = setInterval(autoScrol , intervall)
    }
})


icons[1].addEventListener('click', silderEvent)
icons[1].addEventListener('autoClick', silderEvent)

function silderEvent(e) {
    carouselCount += 100
    slider()
    if(e.type !== 'autoClick') {
        clearInterval(scrollInterval)
        scrollInterval = setInterval(autoScrol , intervall)
    }
}

function slider() {
    switch(carouselCount) {
        case -100 :
            carouselCount = 0
            break
        case 200 :
            carouselCount = 0
            break
        default :
            break
    }
    sildes.forEach((silde) => {
        silde.setAttribute('style', 'transform: translateX(-'+ carouselCount +'%)')
    })
}

//créez un nouvel événement à envoyer cliquez pour le défilement automatique

var autoClick = new Event('autoClick')

function autoScrol() {
    icons[1].dispatchEvent(autoClick)
}

//définir le moment des événements de clic de répartition

scrollInterval = setInterval(autoScrol , intervall)

new Glider(document.querySelectorAll('.glider')[0], {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 1200,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },{
            // screens greater than >= 1024px
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },{
            // screens greater than >= 1024px
            breakpoint: 304,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },{
            // screens greater than >= 1024px
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },{
            // screens greater than >= 1024px
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });

  new Glider(document.querySelectorAll('.glider')[1], {
    slidesToScroll: 1,
    slidesToShow: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prevs',
      next: '.glider-nexts'
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 1200,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },{
            // screens greater than >= 1024px
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },{
            // screens greater than >= 1024px
            breakpoint: 304,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },{
            // screens greater than >= 1024px
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },{
            // screens greater than >= 1024px
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
  });

console.log(icon_open);
/*
bot_search.addEventListener('click', function() {
    show_search.style.visibility = 'visible'
    bot_search.style.marginLeft = '-50px'

})
*/
icon_open.addEventListener('click', () => {
    //console.log(icon_open);
    ul.classList.add('visible')
    banniere.classList.add('banniere-b')
    s.style.visibility = "hidden"
   // body.classList.add('body')
    //nav.classList.add('tranparent')
    //logo.classList.add('logo_index')
})
/*
console.log(icon_open);

body.addEventListener('click', () => {
    body.classList.remove('body')
    ul.classList.add('close')
})

*/

banniere.addEventListener('click' , () => {
  ul.classList.remove('visible')
  s.style.visibility = "visible"
  banniere.classList.remove('banniere-b')
})