console.log("sanity check");

$(document).ready(function() {
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  setInterval(function(){
    $('.carousel').carousel('next');
  }, 10000);
});
