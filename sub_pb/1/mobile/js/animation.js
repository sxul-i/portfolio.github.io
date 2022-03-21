
$(document).ready(function(){

    //mobile nav
    var num = 0;
    var flag = true;
    $(".cat-btn").unbind("click").bind("click",function(){
        num++;
        if(flag){
			$("#header .cat").animate({"left":0,"opacity":1},500);
            $("body").css("overflow","hidden");
            flag = false;
        }else{
			$("#header .cat").animate({"left":-100+"%","opacity":0},500);
            flag = true;
            $("body").css("overflow","visible");
        }
        $(this).toggleClass("on");
    });

    
	$('.sub-btn').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.side_list li').removeClass('active');
		$('.mb-nav').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

    // scroll nav
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.menu').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.menu').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.menu').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }



    
    //top
    $('.top').click(function(){
        $('html, body').animate({scrollTop: '0'}, 600);
        return false;
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

    //counsel
    $('.ck-text').click(function(){
        $(this).toggleClass('active');
    });

    //counsel
    $('.ins-wrap').click(function(){
        $(this).next('.instructor-text').toggleClass("active");
    });




});