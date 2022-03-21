$(document).ready(function(){
    
    //메뉴눌렀을 때 해당 페이지로 이동
    var scrollLink = $('.scroll');
    //smooth scroll
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').stop().animate({
            //.hash #아이디값 취득 = attr();
            scrollTop : $(this.hash).offset().top
        },800);
    });
    
    
    //메뉴 하단 red bar
    $('.scroll').click(function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
    });
    
    //red arrow 클릭했을 때 하단으로 내려가기
    $('.arrow').click(function(){
        $('body,html').stop().animate({
            //.hash #아이디값 취득 = attr();
            scrollTop:'800'
        },900);
    });
    
    $('.popup-x').click(function(){
        $('.popup').css('display','none');               
    });
    
    
    
});