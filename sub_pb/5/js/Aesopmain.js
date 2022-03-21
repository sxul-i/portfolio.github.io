$(document).ready(function(){
    
    
    //bgSlider
    var i = 1;
    var imgs = ['img/AesopBg1.jpg','img/AesopBg2.jpg','img/AesopBg3.jpg'];
    var img = $('.bgSlider');
    
    setInterval(function(){
        img.fadeOut(1500,function(){
            img.css('background-image','url('+imgs[i++]+')').fadeIn(1500);
        });
        if(i === imgs.length){
            i = 0;
        }
    },3000);
  
    
    //clickSlider
    $('.clickSlider').each(function(){
        var timer;
        var container = $(this);
        
        //v호출문
        startTimer();
        container.find('a').hover(stopTimer,startTimer);
        
        //v함수선언
        function clickSlider(){
            var anchors = container.find('a');
            var first = anchors.eq(0);
            var second = anchors.eq(1);
            
            first.fadeOut(1000,function(){
                first.appendTo(container);
            });
            second.fadeIn(1000);
        }
        function startTimer(){
            timer = setInterval(clickSlider,1000);
        }
        function stopTimer(){
            clearInterval(timer);
        }
    });
    
        //window scroll
   $(window).scroll(function(){
        
        var wscroll = $(this).scrollTop();
        
        /* 검사창 콘솔창 헬로우 글씨띄우기
        if(wscroll > $('.products').offset().top){
            console.log('hello');
        }
        */
        
        if(wscroll > $('.products').offset().top-1000){
            $('.products').find('div').each(function(i){
                setTimeout(function(){
                  $('.products').find('div').eq(i).addClass('showing');
                },450*(i+1));
                
            });
        }
    }); 
    
    //갤러리
    $('.modal').magnificPopup({
       type: 'image',
       gallery:{
       enabled:true
       }
   }); 
    
    //guideText
    $('.guide1').find('input').each(function(){
        var text = '전이슬';
        $(this).val(text).addClass('guide');
        $(this).focus(function(){
            if($(this).val() === text){
                $(this).val('').removeClass('guide');
            }else{
                $(this).val().removeClass('guide');
            }
        });
        $(this).blur(function(){
            if($(this).val() === ''){
                $(this).val(text).addClass('guide');
            }else{
                $(this).val().removeClass('guide');
            }
        });
    });
    
    $('.guide2').find('input').each(function(){
        var text = 'dltmf7619@gmail.com';
        $(this).val(text).addClass('guide');
        $(this).focus(function(){
            if($(this).val() === text){
                $(this).val('').removeClass('guide');
            }else{
                $(this).val().removeClass('guide');
            }
        });
        $(this).blur(function(){
            if($(this).val() === ''){
                $(this).val(text).addClass('guide');
            }else{
                $(this).val().removeClass('guide');
            }
        });
    });
    
});