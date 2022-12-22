$(document).ready(function () {
  //banner slider js
  $(".banner-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });

  //banner slider js
  $(".team-slider").slick({
    arrows: false,
    slidesToShow: 4,
  });

  //counter js

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //brand slider js
  $(".brand-slider").slick({
    slidesToShow: 5,
    prevArrow:
      '<i class="fa fa-chevron-left previous-arrow" aria-hidden="true"></i>',
    nextArrow:
      '<i class="fa fa-chevron-right next-arrow" aria-hidden="true"></i>',
  });
});

// venubox js
$(document).ready(function () {
  $(".venobox").venobox({
    bgcolor: "#e23e38",
  });

  //wow js
  new WOW().init();
});

// $(document).ready(function () {
//   //testimonial

//   $(".testimonial-slider").slick({
//     arrows: false,
//     dots: true,
//     autoplay: true,
//   });

// });
 $(document).ready(function () {
   $(".testimonials").owlCarousel({
     autoplay: true,
     dots: false,
     loop: true,
     speed: 400,
     margin: 30,
     nav: true,
     slideBy: 1,
     responsive: {
       0: {
         items: 1,
       },
       768: {
         items: 2,
       },
       1025: {
         items: 3,
       },
     },
   });
 });
