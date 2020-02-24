$(document).ready(function(){

  $(  '.nav-icon' ).click(function(event){

    $(this).toggleClass(  'open'  );

    $(  '.nav-block__list'  ).slideToggle(  "slow"  );

    if ($(  '.nav-icon' ).hasClass( 'open' )) {

        $(  "body"  ).css(  "overflow","hidden" );

    } else {  $(  "body"  ).css(  "overflow","auto" );

              $(  '.nav-icon' ).removeClass(  'open'  );

            }
 
  })

});

$(window).resize(function() {

  if( $( window ).width() <= 1024 ) {

    $(  '.nav-block__list'  ).css(  'display','none'  );

  } else {  $(  '.nav-block__list'  ).css(  'display','flex'  );  }
          
});

$(window).resize(function() {

  if( $( window ).width() <= 1024 ) {

    $(  '.nav-block__link'  ).click(function()  {

      $(  '.nav-block__list'  ).css(  'display','none'  );

      $(  "body"  ).css(  "overflow","auto" );

      $(  '.nav-icon' ).removeClass(  'open'  );

    })

  } else {

    if( $( window ).width() > 1024 )  {

      $(  '.nav-block__link'  ).click(function()  {

        $(  '.nav-block__list'  ).css(  'display','flex'  );

      })

    }

  }

});

var mySwiper = new Swiper(  '.swiper-container', {
	loop: true,
	preloadImages: false,
	autoplayDisableOnInteraction: true,
	resizeReInit: true,
  lazyLoading: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	 watchSlidesVisibility: true,
     autoHeight: true,
     onLazyImageReady : function(swiper, slide, image){
        swiper.update()
     },
      breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
              pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
              }
            },
            992:{
              slidesPerView: 2,
              spaceBetween: 20,
              pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
              }
            },
            768:{
              slidesPerView: 2,
              spaceBetween: 20,
              pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
              }
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
              }
            },
            on:{
            beforeResize() {
              if (window.innerWidth >= 320) {
              swiper.slides.css('width', '');
               }
             }
           }
      },
});

$(  '.contacts__callback_btn, .footer__callback-btn, #order'  ).click(function(event) {

  $(  '.modal'  ).modal(  "slow"  );

  return false;

});

$(document).ready(function(){

  $( '#tel' ).inputmask({ "mask": "+7(999) 999-99-99" });

  $(  'select'  ).styler();

  $(  'form'  ).each(function () {

    $(this).validate({

    errorPlacement(error, element) {

      return true;
    },

    focusInvalid: false,
    rules: {
      Телефон: {
        required: true,
      },
      Имя: {
        required: true,
        maxlength: 10,
      },
    },

    submitHandler(form) {
      let th = $(form);

      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: th.serialize(),
      }).done(() => {

        th.trigger('reset');

      });

      return false;

      }
    });

  });

});

$(  ".about__items-btn" ).click(function() {

    $(  'html,body' ).animate({

      scrollTop: $( ".portfolio"  ).offset().top

    }, 50);
});

$(  ".portfolio__order_btn-1024, .learn_price__btn" ).click(function() {

    $(  'html,body' ).animate({

        scrollTop: $( ".pricing"  ).offset().top
      
      },50);
});