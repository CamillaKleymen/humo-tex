$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true, 
    arrows: false, // Убираем стрелки
    autoplay: true, // Автопрокрутка
    autoplaySpeed: 0, // Скорость паузы (0 для непрерывной прокрутки)
    speed: 4000, // Скорость анимации (регулирует плавность)
    cssEase: "linear", // Линейная анимация для бесконечной плавности
    slidesToShow: 4.5, // Количество видимых слайдов
    slidesToScroll: 1, // Прокрутка одного слайда за раз
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
