// assigned variable
var $ = jQuery.noConflict();

// Project Functions
jQuery(document).ready(function () {
    /////////Scroll To Top Page Function//////////
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });

    $('.scrollup').click(function () {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });

    /////Search Toggle/////
    $('.search-toggler').click(function(){
      $('.search-form').slideToggle(300);
    });

    /////Right Menu/////
    $('.navbar-toggler').click(function(){
      $('.right-navbar').addClass('show');
    });

    $('.overlay').click(function(){
      $('.right-navbar').removeClass('show');
    });


    /////Hero Slider Function//////
    $('.hero-slider-wrapper').slick({
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      cssEase: 'linear'
    });

    ////////Product Slider////////
    $('.product-slider').slick({
      dots: false,
      infinite: false,
      autoplay: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
//////////Ready Function Ended//////////

/////////////////fixed header//////////////////
jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 150) {
    jQuery('.header-nav').addClass('fixed');
  } else {
    jQuery('.header-nav').removeClass('fixed');
  }
});
