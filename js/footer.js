//返回顶部

$(document).ready(function(){
    alert('1')
})
    window.onscroll = function(){
        var eleTop = $('.concert-show').offset().top;
        var isFirst = true;
        // window.onscroll = function(){
            if($(document.documentElement).scrollTop()>2150){
                $(".return-top").show();
            }else{
                $(".return-top").hide();
            }
            var cliHeight = $(window).height();
            var scroll = $(document.documentElement).scrollTop() + cliHeight;
            console.log(scroll);
            console.log($(document.documentElement).scrollTop())
            if( scroll > eleTop && isFirst==true){
                $('.concert-show ul li').eq(1).addClass('fadeLeft')
                $('.concert-show ul li').eq(0).addClass('fadeLeft')
                $('.concert-show ul li').eq(4).addClass('fadeLeft')
                $('.concert-show ul li').eq(5).addClass('fadeLeft')
                $('.concert-show ul li').eq(2).addClass('fadeRight')
                $('.concert-show ul li').eq(3).addClass('fadeRight')
                $('.concert-show ul li').eq(6).addClass('fadeRight')
                $('.concert-show ul li').eq(7).addClass('fadeRight')
                isFirst = false;     
            }
        // }
    
    
        $(".return-top").click(function () {
            $("html,body").animate({scrollTop:0}, 500);
        })
    }
  

