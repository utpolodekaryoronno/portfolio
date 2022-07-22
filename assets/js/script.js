


$(window).on('load',function(){
    $('.preloader').delay(1000).fadeOut(500);
})

$('document').ready(function(){

    $('.menu-bar i').click(function(){
        $(".profile-area").toggleClass('active');
    }) 
    // all-Selection
    // wow.js
    new WOW().init();

    // menubar-active
    // scroll spy.js
    $('.scroll').onePgaeNav({
        wrapper: '#onepage-nav'
      });
    
    // about-area
    // owlCarousel
    $(".about-me").owlCarousel({
        responsive: true,
        loop:true,
        dots:true,
        autoplay:true,
        margin: 20,
        slideSpeed : 200,
        items : 4,
        responsive:{
            320:{
                items:1,
            },
            450:{
                items:2,
            },
            767:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    // // skills-area
    // // progess-bar
    
    
    $('.html').rProgressbar({
        percentage: 95,
        fillBackgroundColor: '#333300',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
    });

    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#663300',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
    });

    $('.bootstrap').rProgressbar({
        percentage: 70,
        fillBackgroundColor: '#006600',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
    });

    $('.jquery').rProgressbar({
        percentage: 60,
        fillBackgroundColor: '#669999',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
    });

    $('.javascript').rProgressbar({
        percentage: 30,
        fillBackgroundColor: '#0099ff',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
    });

    $('.devlopment').rProgressbar({
        percentage: 20,
        fillBackgroundColor: '#666699',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '10px',
        width: '100%'
    });

    // mixitup plugin
    var containerEl = document.querySelector('.projects'); 
    var mixer = mixitup(containerEl, {
        load: {
            filter: 'all'
        },
        animation: {
            effectsIn: 'fade translateY(-100%)',
            effects: 'fade translateZ(-100px)'
        }
    });


    // scroll-ber
    $(window).scroll(function(){
		if($(this).scrollTop()>200){
			$('.scroll-div i').show();
		}
		else{
			$('.scroll-div i').hide();
		}
	});

    $('.scroll-div i').click(function(){
        $('html,body').animate({scrollTop:0}, 2000);
        return false;
    });

});


// Scroll-bar

// window.addEventListener('load',(event) =>{
//     var Scrollbar = window.Scrollbar;
//     Scrollbar.init(document.querySelector('#min-content'), {
//       damping:0.03,
//       thumbMinSize:0.03,
//     });
// });
  


