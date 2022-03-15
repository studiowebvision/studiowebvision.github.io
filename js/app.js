$(function () {
  $("#projects").slick({
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableHeight: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $("#projects .projects__item").each(function (index) {
    let key = index + 1;
    $(this).attr("data-aos", "fade-left");
    $(this).attr("data-aos-delay", `${key}00`);
  });

  AOS.init();
});
