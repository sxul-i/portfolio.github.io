


$(document).ready(function(){

    var scrollLink = $('.scroll');
    //smooth scroll
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').stop().animate({
            scrollTop : $(this.hash).offset().top-80
        },500);
    });

    //plus
    $('.jejugothic').click(function(){
        $(this).toggleClass('minus');
    });
    $('.jejugothic').click(function(){
        $(this).next('.landing.hide').toggleClass('plus');
    });


    //counsel
    $('.btn-text').click(function(){
        $('.more textarea').toggleClass('active');
    });

});