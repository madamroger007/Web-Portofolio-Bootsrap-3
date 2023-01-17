// event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  //ambil isi href
  var href = $(this).attr("href");

  // tangkap elemen href
  var elemenHref = $(href);

  // pindahkan scroll
  $("html , body").animate(
    {
      //scrolltop= tergantung scroll halaman
      scrollTop: elemenHref.offset().top - 50,
    },
    1200,
    "easeInOutExpo"
  );

  //memmberikan jarak
  e.preventDefault();
});

// paralax
$(window).scroll(function () {
  var wscroll = $(this).scrollTop();
  //untuk jombroton
  // aksi mengambil elemen
  $(".jumbotron img").css({
    transform: "translate(0px," + wscroll / 4 + "%)",
  });

  // aksi untuk h1
  $(".jumbotron h1").css({
    transform: "translate(0px," + wscroll / 2 + "%)",
  });

  //aksi untuk p
  $(".jumbotron p").css({
    transform: "translate(0px," + wscroll / 1.2 + "%)",
  });

  // about
  if (wscroll > $(".about").offset().top - 100) {
    //mengambil elemen ada 6
    $(".pKiri , .pKanan ").addClass('pMuncul');
  }

  //portofolio
  // memunculkan gambar 1 per 1
  if (wscroll > $(".portofolio").offset().top - 200) {
    //mengambil elemen ada 6
    $(".portofolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portofolio .thumbnail").eq(i).addClass("muncul");
      }, 600 * i);
    });

    //
  }
});
