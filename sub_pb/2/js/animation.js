$(document).ready(function(){

    /* header */
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 180) { 
            $('.hd-top').slideUp();
            $('.hd-bt').css('background','rgba(255,255,255,1)');
        }
        else {
            $('.hd-top').slideDown();
            $('.hd-bt').css('background','rgba(255,255,255,0.5)');
        }
    });


    //smooth scroll
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').stop().animate({
            scrollTop : $(this.hash).offset().top-93
        },500);
    });

    
    /* partner slide */
    $('.gnb-partner a').click(function() { 
        $('.gnb-partner-list').slideToggle();
    });

    
    /*partner*/
	$('.tab-btn').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active');
		$('.col-box').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})

    /* top-btn */
    $('#top-btn').click(function(){
        $('html, body').animate({scrollTop: '0'}, 600);
        return false;
    });



});