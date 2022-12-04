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

