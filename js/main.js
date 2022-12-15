// nav mobile menu
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const navlist = document.querySelector('.nav__list');
const navbtnmobile = document.querySelector('.nav__btn');
const menuiconwrapper = document.querySelector('.menu-icon-wrapper');

navBtn.onclick = function(){
     nav.classList.toggle('nav--mobile'); // додаєм клас nav--active до nav
     menuIcon.classList.toggle('menu-icon--active'); // додаєм клас menu-icon--active до menu-icon
     document.body.classList.toggle('no-scroll'); // додаєм клас no-scroll до body
     navlist.classList.toggle('nav__list--active'); // додаєм клас nav__list--active до nav__list
     navbtnmobile.classList.toggle('nav__btn--active'); // додаєм клас nav__btn--active до nav__btn
     menuiconwrapper.classList.toggle('menu-icon-wrapper--active'); // додаєм клас menu-icon-wrapper--active до menu-icon-wrapper
}



// Header img
const img = document.querySelector('.header__main-img');

repeat();

function repeat(){
     img.onclick = function() {
          $(document).ready(function() {
               $("#headerTop").removeClass("none");
               $("#headerBottom").removeClass("none");
          });
          img.classList.toggle('fix-imgsize');

          img.onclick = function() {
               $(document).ready(function() {
                    $("#headerTop").addClass("none");
                    $("#headerBottom").addClass("none");
               });
               img.classList.toggle('fix-imgsize');
               repeat();
          }
     }
}


