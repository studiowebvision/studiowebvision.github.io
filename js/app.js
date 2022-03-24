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

  $("a[href='#top']").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $("#scrollDown").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(".wrapper").offset().top }, "slow");
    return false;
  });

  $(window).on("scroll", function () {
    if ($(document).scrollTop() > 250) {
      $(".footer__top").css("opacity", 1);
    } else {
      $(".footer__top").css("opacity", 0);
    }
  });

  AOS.init();
});
