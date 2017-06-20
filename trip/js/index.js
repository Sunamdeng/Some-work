
$(window).scroll( function (event) {
  var winTop = $(window).scrollTop( );
  var nav = $("nav");
  var flexBoxTop = $(".left-top-box");
  console.log(flexBoxTop);
  if (winTop > 70) {
    nav.css("background","rgb(125, 136, 93)");
  }
  else {
      nav.css("background","none")
    }
   if (winTop > 400) {
     flexBoxTop.fadeIn(1000);
  }
  if (winTop > 800) {

  }
});

$ (function () {
  $(".pic ul li").mouseover (function () {
    $(this).stop(true).animate({height:"438px"},500).siblings().stop(true).animate({height:"80px"},500)
  });
});
