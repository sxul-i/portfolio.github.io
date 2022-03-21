$(document).ready(function(){


    /* mb-search */
    $(".search-btn input").on('click',function(){
        $('.search form').slideToggle(100);
    });
    $(".close-btn").on('click',function(){
        $('.search form').slideToggle(100);
    });

    
    /*sub notice*/
	$(function(){
		var $btn_notice = $('.more-btn');

		$btn_notice.on('click', function(){
            $(this).toggleClass('plus');
            
			if($(this).hasClass('plus')) {
				$(this).next('.nt-detail').show();
			} else {
				$(this).next('.nt-detail').hide();
			}
        });
	});


    /* mb-nav */
    function listLengt () {
        
        if($(window).width() > 768) {

            //768이상일때
            $(".mb-gnb").removeClass('swiper-container');
            $(".mb-gnb ul").removeClass('swiper-wrapper');
            $(".mb-gnb li").removeClass('swiper-slide');
            $(".mb-gnb li").css('width','auto');

            /* mb-new */
            var swiper2 = new Swiper('.swiper-container.new-container', {
                loop: true,
                autoplay: true,
                slidesPerView: 4,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next.new-next',
                    prevEl: '.swiper-button-prev.new-prev',
                },
            });

        } else {

            //768이하일때
          $(".mb-gnb").addClass('swiper-container');
          $(".mb-gnb ul").addClass('swiper-wrapper');
          $(".mb-gnb li").addClass('swiper-slide');
          
            var swiper0 = new Swiper('.swiper-container.mb-gnb', {
                slidesPerView: 4,
                slidesPerGroup:1,
                loop:false,
                autoplay:true,
            });

            /* mb-new */
            var swiper2 = new Swiper('.swiper-container.new-container', {
                loop: true,
                autoplay: true,
                slidesPerView: 3,
                spaceBetween: 15,
                navigation: {
                    nextEl: '.swiper-button-next.new-next',
                    prevEl: '.swiper-button-prev.new-prev',
                },
            });

        }
        
    }

    listLengt();


    $(window).resize(function(){

        listLengt();
    });




});