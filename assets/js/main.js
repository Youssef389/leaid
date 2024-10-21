/*** TABLE OF CONTENTS
======================================================
    0 / general
    1 / menu toggle
    2 / call the Owl initializer functions
    3 / call the slick functions
    4 / all the  feather icons function
    5 /  call  AOS function
    6 / call  Lazy function
    7 /  call  Typed function
    8 /  call  StickySidebar function
    =================================================== ***/
$(function () {
    ("use strict");
    $('.jarallax').jarallax({
        speed: -0.2
    });
            // ============================= menu toggle
            $(".menu-toggle-icon").on("click", function () {
                $(".mb-overlay").addClass("mb-visible");
            });
            $(".mb-overlay-bg , .close-mb-menu").on("click", function () {
                $(".mb-overlay").removeClass("mb-visible");
            });
            // ================= dropdown
            $('.has-dropdown-m').click(function(e) {
                e.preventDefault();
              let $this = $(this);
            
              if ($this.next().hasClass('show')) {
                  $this.next().removeClass('show');
                  $this.next().slideUp(350);
              } else {
                  $this.parent().parent().find('li .dropdown-mobile').removeClass('show');
                  $this.parent().parent().find('li .dropdown-mobile').slideUp(350);
                  $this.next().toggleClass('show');
                  $this.next().slideToggle(350);
              }
          });    
    // Click event to scroll to top.
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 800) {
            $('.back-to-top').addClass('show-back-to-top');
        } else {
            $('.back-to-top').removeClass('show-back-to-top');
        }
    });
    // Click event to scroll to top.
    $('.back-to-top').on("click",function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // ============================= 1/ menu toggle
    $(".menu-toggle-icon").on("click", function () {
        $(".mobile-menu").slideToggle();
    });
    // Check for click events on the navbar burger icon
    $(".navbar-burger").on("click",function () {
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");

    });

    /*! Fades out the whole page when clicking links */
    $('.fade-page').on("click",function (e) {
        e.preventDefault();
        newLocation = this.href;
        $('body').fadeOut('slow', newpage);
    });
    // ============================ 3/ call the slick functions
    $('.work-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.testi-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.testimonial_in_box').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,


    });
    $('.blog-boxes-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.feautures-boxes-slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    $('.clients-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
        // ============================ 3/ call the slick functions
        $('.reviews_slick').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        });
    // ============================ 3d plugin hover effect
    $(".3d-wrap").hover3d({
        selector: ".3d-hover",
        perspective: 2000,
        sensitivity: 35,
    });
    $(".work_item").hover3d({
        selector: ".work-img",
        perspective: 1500,
        sensitivity: 30,
    });





    // ============================  5/ call  AOS function

    function newpage() {
        window.location = newLocation;
    }
    
$(".se-pre-con").fadeOut("slow");
var btn = $('.to-top');
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
});


$(".has-submenu" ).hover(
    function () {
        $(".sub-nav" ,this).addClass("visible"); 
    }, 
    function () {
        $(".sub-nav" ,this).removeClass('visible');
    }
    );

    $(document).ready(function(){
        var count=0;
        var counter= setInterval(function() {
          if(count<101){
            $('.count').text(count+'%');
            $('.loader').css('width', count+'%');
            count++; 
          }
          else {
            clearInterval(counter);
          }
        },30)
      });

$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("height", progress + "%");
})



$(document).ready(function() {
    $(".animsition-overlay").animsition({
      inClass: 'overlay-slide-in-top',
      outClass: 'overlay-slide-out-bottom',
      inDuration: 850,
      outDuration: 750,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : true,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'html',
      transition: function(url){ window.location.href = url; }
    });
  });

  $('[data-toggle="tooltip"]').tooltip()
  