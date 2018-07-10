jQuery(document).ready(function () {
  jQuery('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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


  $(".shop")
    .hover(function () {
      if (!($(this).hasClass('active-shop'))) {
        $(this).find('#tick').fadeTo(0, 1);
      }

    })
    .mouseleave(function () {
      if (!($(this).hasClass('active-shop'))) {
        $(this).find('#tick').fadeTo(1, 0);
      }
    })
    .click(function () {
      if ($(this).hasClass('active-shop')) {
        $(this).removeClass('active-shop');
        var tick = $(this).find('#tick');
        tick.css("background-color", "#e6e6e6");
        tick.fadeTo(1, 0);

      } else {
        $(this).addClass('active-shop');
        var tick = $(this).find('#tick');
        tick.css("background-color", "#2196f3");
        tick.fadeTo(0, 1);
      }
    });
});