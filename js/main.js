

  $('.slider').slick({
  	speed: 1000,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 3,
    infinite: true,
    accessibility: true,
    pauseOnFocus: true,
  });


$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});