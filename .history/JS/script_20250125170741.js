$(document).ready(function () {
  $(".sliderKL").slick({
    dots: false,
    infinite: true, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 0, 
    speed: 4000, 
    cssEase: "linear",
    slidesToShow: 4.5, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
