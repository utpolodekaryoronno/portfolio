$(document).ready(function(){
  // Mobile Menu Icon
   
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
        $('.side-bar').toggleClass('active');
        $('.min-content').toggleClass('overlay');
    });

    // Outside click handler
    $(document).click(function (event) {
        // Check if the click was outside the side-bar and nav-icon
        if (
            !$(event.target).closest('.side-bar, #nav-icon').length &&
            $('.side-bar').hasClass('active')
        ) {
            $('#nav-icon').removeClass('open');
            $('.side-bar').removeClass('active');
            $('.min-content').removeClass('overlay');
        }
    });
  

  

    // Add Class Menu
    $('.header-nav nav ul li a').click(function(){
      $('.header-nav nav ul li a').removeClass('active');
      $(this).addClass('active');
    });


      /*--------------------------------------------------------
    / 16. Sticky Header
    /---------------------------------------------------------*/
    if($(".isSticky").length > 0){
      var header_height = $(".isSticky").height();
      $(window).on('scroll', function(){
          if($(window).scrollTop() > 100){
              $(".isSticky").addClass('fixedHeader animated slideInDown');
          }else{
              $(".isSticky").removeClass('fixedHeader animated slideInDown');
          }
      });
    }

  /*--------------------------------------------------------
    /   03. Back To Top
    /--------------------------------------------------------*/
    function backtotop() {
      $(window).scroll(function(){
          if ($(this).scrollTop() > 50) {
              $('#backtotop').addClass('activate');
          } else {
              $('#backtotop').removeClass('activate');
          }
      });
      $('#backtotop, #backtotop02').on('click', function () {
          $("html, body").animate({scrollTop: 0}, 600);
          return false;
      });
    }
    backtotop();



     // aos Plugin
  AOS.init();

});





// Window load 
$(window).on('load',function(){
  $('.preloader').delay(500).fadeOut(400);
})

$(document).ready(function(){
  // progress-bar
  var bar = new ProgressBar.Circle('.progress-outhers', {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.30); 

  var bar = new ProgressBar.Circle('.progress-english', {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.70); 

  var bar = new ProgressBar.Circle('.progress-bangla', {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 10,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.95); 

  // Skill-bar
  // html
  var bar = new ProgressBar.Line('.html', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.90); 

  // css
  var bar = new ProgressBar.Line('.css', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.95); 

  // Bootstrap
  var bar = new ProgressBar.Line('.bootstrap', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.85); 


  // javascript
  var bar = new ProgressBar.Line('.javascript', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.50); 

  // jquery
  var bar = new ProgressBar.Line('.jquery', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.75); 

  // php
  var bar = new ProgressBar.Line('.php', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.60); 

  // wordpress
  var bar = new ProgressBar.Line('.laravel', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.65); 

  // Mysql
  var bar = new ProgressBar.Line('.mysql', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 5000,
    color: '#FFC107',
    trailColor: '#191923',
    trailWidth: 3,
    easing: 'easeOut',
    svgStyle: {width: '100%', height: '100%'},
    text: {
      value: '0',
      style: {
        color: '#8c8c8e',
        position:'absolute',
        bottom:'20px',
        right:'0',
        fontSize:'12px'
      },
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(.70); 

  // member swiper Carousel
  var swiper = new Swiper(".swiper-members", {
    loop:true,
    animateIn:'fadeIn',
    animateOut:'fadeOut',
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 5,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".teamMember-pagination",
      clickable: true,
    },
    breakpoints: {
      450: {
        slidesPerView: 1,
      }
    }
  });

  // My all-work
 

});


// Typing js
var typed = new Typed('#typed', {
  strings: ['Business Website.', 'NFT Website.','Ecommerce Website','Newspaper Website'],
  smartBackspace: true,
  loop:true,
  fadeOutDelay: 500,
  backDelay: 700,
  startDelay: 100,
  typeSpeed: 100,
  backSpeed: 100,
  fadeOutDelay: 500,
});

// mixitup gallery
mixitup("#mix-wrapper",{
  animation: {
    effectsIn: "fade translateY(-100%)",
    effects: "fade translateZ(-100px)",
    duration: 1000,
  }
});


// Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    Carousel: {
      fill: false,
      center: true,
    },
  },
});


// Scroll-bar
window.addEventListener('load',(event) =>{
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('.min-content'), {
    damping:0.05,
    thumbMinSize:0.05,
    renderByPixels:false,
    alwaysShowTracks:true,
    continuousScrolling:false,
  });
});
window.addEventListener('load',(event) =>{
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('.skill-bar'), {
    damping:0.05,
    thumbMinSize:0.05,
    renderByPixels:false,
    alwaysShowTracks:true,
    continuousScrolling:false,
  });
});

// scrollbar animate
Scrollbar.use(OverscrollPlugin);
Scrollbar.init(document.querySelector('.skill-bar'), {
  damping: 0.05,
  renderByPixel: true,
  continuousScrolling: true,
});
Scrollbar.init(document.querySelector('.content-banner'), {
  damping: 0.05,
  renderByPixel: true,
  continuousScrolling: true,
});









