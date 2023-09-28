$(document).ready(function () {
  $("#myCarousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    dots: false,
    margin: 20,
    nav: true, // Show navigation buttons
    responsive: {
      0: {
        items: 1, // Number of cards shown in the carousel for smaller screens
      },
      768: {
        items: 2, // Number of cards shown in the carousel for medium screens
      },
      992: {
        items: 2, // Number of cards shown in the carousel for large screens
      },
    },
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  $(".prev-btn").addClass("disabled");
  $(owl).on("translated.owl.carousel", function (event) {
    if ($(".owl-prev").hasClass("disabled")) {
      $(".prev-btn").addClass("disabled");
    } else {
      $(".prev-btn").removeClass("disabled");
    }
    if ($(".owl-next").hasClass("disabled")) {
      $(".next-btn").addClass("disabled");
    } else {
      $(".next-btn").removeClass("disabled");
    }
  });
});
