$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false
    });

    $('.main-slider__list').slick({
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
    });

    $( "#tabs" ).tabs();
    
    $('.products-gallery__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.products-gallery__nav'
    });

    $('.products-gallery__nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.products-gallery__list',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });

    $('.blog-slider__wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      arrows: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    });

    $('.partners-slider__list').slick({
      slidesToShow: 6,
      slidesToScroll: 3,
      dots: false,
      arrows: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]

    });

    $('.main-nav__toggle').click(function(){
        $('.main-nav__list').toggleClass('--active');
    });

});
