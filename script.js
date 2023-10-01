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

// 1. tangkap element dengan class menu
const menu = document.querySelector(".navbar-nav");

// 2. jika element dengan class menu diklik
menu.addEventListener("click", function (e) {
  // 3. maka ambil element apa yang diklik oleh user
  const targetMenu = e.target;

  // 4. lalu cek, jika element itu adalah link dengan class menu__link
  if (targetMenu.classList.contains("nav-link")) {
    // 5. maka ambil menu link yang aktif
    const menuLinkActive = document.querySelector("ul li a.active");

    // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
    if (
      menuLinkActive !== null &&
      targetMenu.getAttribute("href") !== menuLinkActive.getAttribute("href")
    ) {
      // 7. maka hapus class active pada menu yang sedang aktif
      menuLinkActive.classList.remove("active");
    }

    // 8. terakhir tambahkan class active pada menu yang di klik oleh user
    targetMenu.classList.add("active");
  }
});
