window.addEventListener('load', function(){
  document.querySelector('.js-scroll-into-portfolio').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.js-scroll-into-contact').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth'});
  });

  document.querySelector('.js-scroll-into-about-me').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.about-me').scrollIntoView({ behavior: 'smooth'});
  });
})