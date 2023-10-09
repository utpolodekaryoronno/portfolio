
$(window).on('load',function(){
    $('.preloader').delay(1000).fadeOut(500);
})

$('document').ready(function(){

    $('.menu-bar i').click(function(){
        $(".profile-area").toggleClass('active');
    }) 

    // change-theme-backgroundColor
    $('.theme-setting i').click(function(){
        $(".theme-option-div").toggleClass("active");
    }) 
    $('.theme-setting i').click(function () {
        $(".theme-setting-wrapper").toggleClass("active");
    });
    

    
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
        height: '7px',
        width: '100%'
    });

    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#663300',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '7px',
        width: '100%'
    });

    $('.bootstrap').rProgressbar({
        percentage: 85,
        fillBackgroundColor: '#006600',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '7px',
        width: '100%'
    });

    $('.jquery').rProgressbar({
        percentage: 60,
        fillBackgroundColor: '#669999',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '7px',
        width: '100%'
    });

    $('.javascript').rProgressbar({
        percentage: 30,
        fillBackgroundColor: '#0099ff',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '7px',
        width: '100%'
    });

    $('.php').rProgressbar({
        percentage: 60,
        fillBackgroundColor: '#2c4761',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '7px',
        width: '100%'
    });

    $('.mysql').rProgressbar({
        percentage: 70,
        fillBackgroundColor: '#352446',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '7px',
        width: '100%'
    });

    $('.wordpress').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#a88930',
        backgroundColor: '#EEEEEE',
        borderRadius: '0px',
        height: '7px',
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



     // Aos Js
    //  AOS.init();
    



    // Skin Color Change
    $('.skin-color span').click(function(e) {
        $('.skin-color span').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });


    // Form Validation
    $("#FormValidation").validate({
       rules: {
            // name is id
            name:{
                minlength: 2
            },
            // email is id
            email:{
                // email is type
                email:true,
            },
             // number is id
            number:{
                // number is type
                number:true,
                minlength:10,
                maxlength:14,
            },
        },
        messages:{
            name:{
                required: "Please enter your Name",
                minlength: "Name at least 3 characters"
            },
            email: "Please enter your Valid Email",
            number: "Please enter your Number",
            message: "Please enter your Message",
        },
     
        submitHandler: function(form) {
          form.submit();
        }
    });

});

// Send  Email


// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "info.utpolodekary@gmail.com",
//         Password : "utpol266",
//         To : 'info.utpolodekary@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }





// Skin Color 
let skinButtons = document.querySelectorAll('.skin-button');
skinButtons.forEach(color =>{
  color.addEventListener('click', () =>{
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--button-color', dataColor);
  });
})

// 




// Scroll-bar

// window.addEventListener('load',(event) =>{
//     var Scrollbar = window.Scrollbar;
//     Scrollbar.init(document.querySelector('#min-content'), {
//       damping:0.03,
//       thumbMinSize:0.03,
//     });
// });
  


