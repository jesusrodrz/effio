
function navBar() {
  const navBar = document.getElementById('mainNav'),
    navTrigger = document.getElementById('navTrigger'),
    menu = navBar.querySelector('.menu');


  if (navBar && navTrigger) {

    let navState = false;
    let subMenuC = null
    if (window.innerWidth < 864) {

      navBar.addEventListener('click', e => {
        if (e.target.closest('#navTrigger')) {
          e.preventDefault();
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