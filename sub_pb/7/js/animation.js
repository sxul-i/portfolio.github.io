
$(document).ready(function(){

    var scrollLink = $('.scroll');
    //smooth scroll
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').stop().animate({
            scrollTop : $(this.hash).offset().top-93
        },500);
    });
    


});