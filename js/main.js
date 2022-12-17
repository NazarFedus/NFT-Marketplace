// nav mobile menu
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const navlist = document.querySelector('.nav__list');
const navbtnmobile = document.querySelector('.nav__btn');
const menuiconwrapper = document.querySelector('.menu-icon-wrapper');

navBtn.onclick = function(){
     nav.classList.toggle('nav--mobile');
     menuIcon.classList.toggle('menu-icon--active');
     document.body.classList.toggle('no-scroll');
     navlist.classList.toggle('nav__list--active');
     navbtnmobile.classList.toggle('nav__btn--active');
     menuiconwrapper.classList.toggle('menu-icon-wrapper--active');
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
