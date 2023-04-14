

$(window).on("load", function () {
  $(".preloader").fadeOut();
})


$(document).ready(function(){
   





/************************************************************************************************** */

// main swiper
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});




/************************************************************************************************** */




// news swiper
const swiper2 = new Swiper(' .news .mySwiper', {
  loop: true,
  autoplay: true,
 
  pagination: {
    el: '.news .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news .swiper-button-next ',
    prevEl: '.news .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
  }
});



/************************************************************************************************** */



// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 


openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("body-overflow-hidden");
  $(".nav-overlay").addClass("show-nav-overlay");
})


closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("body-overflow-hidden");
  $(".nav-overlay").removeClass("show-nav-overlay");
})

$(".nav-overlay").click(function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("body-overflow-hidden");
  $(".nav-overlay").removeClass("show-nav-overlay");
})




/************************************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 



/************************************************************************************************** */



// footer nested menu

if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }


/************************************************************************************************** */


// nav nested menu
if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }
   


/************************************************************************************************** */



//fixed nav

    
  
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 150) {
      $("header").addClass("fixed");
      if($(window).width() > 768){
        $(".mynav .li-drop").addClass("li-drop-scroll");
        $(".logo img").addClass("logo-scroll");
        $(".logo img").removeClass("logo-scroll-top0");
        $(".main-nav").addClass("main-nav-scroll");
        $(".header-social .header-social-ancor").addClass("social-width")
      } 
  } 
  if ($(window).scrollTop() == 0){
    if($(window).width() > 768){
      $(".mynav .li-drop").removeClass("li-drop-scroll");
      $(".logo img").addClass("logo-scroll-top0");
      $(".logo img").removeClass("logo-scroll");
      $(".main-nav").removeClass("main-nav-scroll");
      $(".header-social .header-social-ancor").removeClass("social-width")
    } 
  }
});
// var fixedBar = document.querySelector("header"),
// prevScrollposition = $(window).scrollTop();
  
// (window.onscroll = function () {
//   var o = $(window).scrollTop();
//   prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
// })   


   




})  // end of document ready


/************************************************************************************************** */



//  Fire wow 
// new WOW().init();


/************************************************************************************************** */


