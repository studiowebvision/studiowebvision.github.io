$(function () {
  $("#projects").slick({
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    variableWidth: true,
    prevArrow: $("#prevProject"),
    nextArrow: $("#nextProject"),

    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#projects .projects__item, #blogs .blog__item").each(function (index) {
    let key = index + 1;
    $(this).attr("data-aos", "fade-left");
    $(this).attr("data-aos-delay", `${key}00`);
  });

  AOS.init();
});
