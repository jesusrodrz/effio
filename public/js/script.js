
function navBar() {
  const navBar = document.getElementById('mainNav'),
    navTrigger = document.getElementById('navTrigger'),
    menu = navBar.querySelector('.menu'),
    subMenus = [...navBar.getElementsByClassName('has-sub-menu')];



  if (navBar && navTrigger) {

    let navState = false,
      subMenuAf = null,
      triggerAf = null;

    if (window.outerWidth < 864) {
      // console.log('b')
      if (typeof (subTriggers) !== undefined) {
        const subTriggers = subMenus.map((e, i) => {

          const span = document.createElement('span')
          span.classList.add('sub-menu__trigger')
          // span.classList.add('open')
          e.appendChild(span)

        })
      }

      navBar.addEventListener('click', e => {
        if (e.target.classList.contains('has-sub-menu')) {
          // e.preventDefault();
          // navTrigger.classList.toggle('open')
          // menu.classList.toggle('open')
        }
        if (e.target.closest('#navTrigger')) {
          e.preventDefault();
          menu.style.display = 'flex';
          navTrigger.classList.toggle('open')
          menu.classList.toggle('open')
          document.body.classList.toggle('nav-bar-is-open')
          navState = !navState;
          console.log(navState)

          if (navState === false) {
            const menuItems = [...menu.getElementsByClassName('open')];

            menuItems.forEach(e => {
              e.classList.remove('open')
            })
          }

        }
        if (e.target.closest('.sub-menu__trigger')) {
          e.preventDefault();
          if (e.target.closest('.has-sub-menu.menu__link')) {
            const subMenu = e.target.parentElement.parentElement.querySelector('.sub-menu');
            // console.log(subMenu)

            e.target.classList.toggle('open');
            subMenu.classList.toggle('open');

          }
          if (e.target.closest('.has-sub-menu.sub-menu__link')) {
            const subMenu = e.target.parentElement.parentElement.querySelector('.sub-menu-l2');


            if (subMenuAf && subMenuAf !== subMenu) {
              if (subMenuAf.classList.contains('open')) {
                console.log('ok')
                triggerAf.classList.toggle('open')
                subMenuAf.classList.toggle('open')
                e.target.parentElement.parentElement.parentElement.classList.toggle('open--rotate')
                // subMenuAf = subMenu;
              }
            }

            e.target.parentElement.parentElement.parentElement.classList.toggle('open--rotate')
            e.target.classList.toggle('open');
            subMenu.classList.toggle('open');
            subMenuAf = subMenu;
            triggerAf = e.target;

          }
        }
      })
    }
  }
}
navBar()


window.addEventListener('resize', e => {
  navBar()
})

function effioSlider() {

  const slider = document.getElementById('mainSlider');

  if (slider) {

    const nav = document.getElementById('sliderNav'),
      slides = [...slider.getElementsByClassName('slider__item')],
      btns = slides.map(slide => {

        const btn = document.createElement('span');

        btn.classList.add('slider__trigger');

        nav.appendChild(btn);

        return btn
      })

    nav.addEventListener('click', e => {

      const index = btns.indexOf(e.target);

      slides.forEach(slide => {
        if (slide.classList.contains('active')) {
          slide.classList.remove('active')
        }
      })
      slides[index].classList.add('active');


    })

  }

}
effioSlider()