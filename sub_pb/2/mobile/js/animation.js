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

    
    /* mobile nav */
    var num = 0;
    var flag = true;
    $(".gnb-btn").unbind("click").bind("click",function(){
        num++;
        if(flag){
			$("#header .gnb").animate({"right":0,"opacity":1},500);
            $("body").css("overflow","hidden");
            flag = false;
        }else{
			$("#header .gnb").animate({"right":-100+"%","opacity":0},500);
            flag = true;
            $("body").css("overflow","visible");
        }
        $(this).toggleClass("on");
    });

    
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
        e.preventDefault();
        num++;
        if(flag){
			$("#header .gnb").animate({"right":0,"opacity":1},500);
            $("body").css("overflow","hidden");
            flag = false;
        }else{
			$("#header .gnb").animate({"right":-100+"%","opacity":0},500);
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

    /* mobile-introduce */
	$('.tab-btn').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.intro-tabs a').removeClass('active');
		$('.cam-box').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
    })
    
    /* mobile-partner */
    $("p.title-btn").on('click',function(){
        $(this).next(".col-box").slideToggle(100);
        $(this).toggleClass('on');
      });

});