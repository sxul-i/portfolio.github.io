
$(document).ready(function(){



    //nav
    var num = 0;
    var flag = true;
    $(".nav-cat").unbind("click").bind("click",function(){
        num++;
        if(flag){
            $("#header .cat").fadeIn();
            flag = false;
        }else{
            $("#header .cat").fadeOut();
            flag = true;
        }
        $('.cat-btn').toggleClass("on");
    });

    
    //top
    $('.top').click(function(){
        $('html, body').animate({scrollTop: '0'}, 600);
        return false;
    });

    
    //quick-nav
    $(window).scroll(function(){

        var quickTop = $('.main-wrap').offset().top - 200;
        var windowTop = $(window).scrollTop();

        if (quickTop <= windowTop){
            $('.quick-nav').addClass('nav_sticky');
        } else {
            $('.quick-nav').removeClass('nav_sticky');
        }

    });
    
    //sub curriculum
    $('.curriculum > p').click(function(){
        $(this).toggleClass('plus');
    });
    $('.curriculum > p').click(function(){
        $(this).next('.curriculum-box').toggleClass('plus');
    });


    //campus
	$(function(){
		var $el_btn_campus_dropdown = $('.campus-btn');
		var $el_campus_dropdow = $('.campus');

		$el_btn_campus_dropdown.on('click', function(){
            $(this).toggleClass("active");
            
			if($(this).hasClass("active")) {
				$el_campus_dropdow.slideDown();
			} else {
				$el_campus_dropdow.slideUp();
			}
        });
        
        $w.on('scroll',function(){
            $el_btn_campus_dropdown.removeClass('active');
            $el_campus_dropdow.hide();
		});
	});

    //college
	$('.tab-btn').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active');
		$('.col-box').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})


    //intelior
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 8,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 8,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });



	
});