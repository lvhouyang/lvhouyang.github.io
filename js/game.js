
$(function(){
    var  i=0;
    var timer = null;
    function gamerun(){
        timer = setInterval(function () {
            $(".gPic li:not(this)").hide();
            $(".gPic li").eq(i).fadeIn(300);
            $(".gName span:not(this)").stop().animate({
                width:"1",
            },200)
            $(".gName span").eq(i).stop().animate({
                width:"200",
            },200)

            i++;
            if(i==4){
                i=-1;
            }
        },1000)
    }
    gamerun()
    //$(".gPic li:gt(0)").hide()
    //$(".gName span").eq(0).css("width","200")
    $(".game-show").hover(function(){
        clearInterval(timer)
    }, function () {
        gamerun()
    })
    $(".gName li").hover(function(){
        i=$(this).index();
        $(".gPic li:not(this)").hide();
        $(".gPic li").eq(i).show();
        $(".gName span:eq(0)").css("width","1")
    }, function () {
    })
    $(".gName li").hover(function(){
        i=$(this).index();
        $(".gName span").stop().animate({
            width:"1"
        },200)
        $(".gName span").eq(i).stop().animate({
            width:"200",
        },200)
    },function(){
        i=$(this).index();
        $(".gName span").eq(i).stop().animate({
            width:"1"
        },200)
    })

})

