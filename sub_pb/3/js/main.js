$(document).ready(function(){
    
    //메뉴 버튼
    $('.mobile-Btn').click(function(){
        
        $(this).stop().toggleClass('on');
        
        if($('nav').hasClass('on')){
            $('nav').stop().animate({right:'-80%'}).removeClass('on');
        }else{
            $('nav').stop().animate({right:0}).addClass('on');
        }

    });

    //메뉴 open
    $(window).resize(function(){
        if($(window).width()<768){
            $('nav').stop().animate({right:'-80%'}).removeClass('on');
        }
    });

    /*
    //메뉴눌렀을 때 해당 페이지로 이동
    var scrollLink = $('.scroll');
    $(window).scroll(function(){
     var scrollLocation = $(this).scrollTop();
        
    scrollLink.each(function(){
        var sectionTop = $(this.hash).offset().top-300;
            
        if(sectionTop <= scrollLocation){
        //html 마크업체크, a의 부모 li에 active가 있음
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            }
        });
    });
    */
    
    /*
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 1) { 
            $('.navWrap').css('background','rgba(255,255,255,0.8)');
        } 
        else {
            $('.navWrap').css('background','#fff');
        }
    });
    */

    var scrollLink = $('.scroll');
    //smooth scroll
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').stop().animate({
            scrollTop : $(this.hash).offset().top
        },1200);
    });
    
    
    //페이지 상단으로 이동하는 버튼
    $('.top').click(function(){
        $('html, body').animate({scrollTop: '0'}, 500);
        return false;
    });


    //이미지 움직이게 효과넣기
    
});