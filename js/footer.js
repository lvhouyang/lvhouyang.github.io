//返回顶部
$(function () {

    window.onscroll = function(){
        console.log($(document.documentElement).scrollTop())
        if($(document.documentElement).scrollTop()>2150){
            $(".return-top").show();
        }else{
            $(".return-top").hide();
        }
    }


    $(".return-top").click(function () {
        $("html,body").animate({scrollTop:0}, 500);
    })
})
