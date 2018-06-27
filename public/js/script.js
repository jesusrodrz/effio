
function navBar() {
  const navBar = document.getElementById('mainNav'),
    navTrigger = document.getElementById('navTrigger'),
    menu = navBar.querySelector('.menu');


  if (navBar && navTrigger) {

    let navState = false;
    let subMenuC = null

    console.log(window.outerWidth)
    if (window.outerWidth < 864) {
      console.log('b')
      navBar.addEventListener('click', e => {
        if (e.target.classList.contains('has-sub-menu')) {
          e.preventDefault();
          // navTrigger.classList.toggle('open')
          // menu.classList.toggle('open')
        }
        if (e.target.closest('#navTrigger')) {
          e.preventDefault();
          menu.style.display = 'flex';
          navTrigger.classList.toggle('open')
          menu.classList.toggle('open')

        }
        if (e.target.closest('.has-sub-menu.menu__link')) {
          const subMenu = e.target.parentElement.querySelector('.menu--sub-menu');
          // console.log(subMenu)
          e.target.classList.toggle('open');
          subMenu.classList.toggle('open');

        }
        if (e.target.closest('.has-sub-menu.menu__link--sub-menu')) {
          const subMenu = e.target.parentElement.querySelector('.menu--sub-menu-l2');
          // console.log(subMenu, subMenuC)
          e.target.classList.toggle('open');
          subMenu.classList.toggle('open');
          if (subMenuC && subMenuC !== subMenu) {

            subMenuC.classList.toggle('open')
            subMenuC = subMenu;
          } else if (!subMenuC) {

            subMenuC = subMenu;
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