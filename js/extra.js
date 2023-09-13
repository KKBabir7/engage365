//animated icon navbar
document.addEventListener("DOMContentLoaded", function () {
  const threedotNav = document.querySelector('.threedot-nav');
  const animatedIcon1 = document.querySelector('.animated-icon1');

  threedotNav.addEventListener('click', function () {
      animatedIcon1.classList.toggle('open');
      
  });
});


    $(document).ready(function(){

var sectionIds = $('a.nav-link');

  $(document).scroll(function(){
      sectionIds.each(function(){

          var container = $(this).attr('href');
          var containerOffset = $(container).offset().top;
          var containerHeight = $(container).outerHeight();
          var containerBottom = containerOffset + containerHeight;
          var scrollPosition = $(document).scrollTop();
  
          if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
              $(this).addClass('active');
          } else{
              $(this).removeClass('active');
          }
  
  
      });
  });
 


});


// back to top 
		

			

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scrollToTopButton = document.getElementById('js-top');
  const navbarex = document.getElementById('navbar-example2');
  const scrollThreshold = 100;
  if (scrollY > scrollThreshold) {
  navbarex.classList.add('navbar-scrolled');
  scrollToTopButton.style.bottom = '10px'

  } else {
    navbarex.classList.remove('navbar-scrolled');
  scrollToTopButton.style.bottom = '-200px'
  }
})






