var  i=0;
var index=0;
$(function(){
    $(".gPic li:gt(0)").hide()
    $(".gName span").eq(0).css("width","200")
    $(".gName li").hover(function(){
        i=$(this).index();
        $(".gPic li:not(this)").hide();
        $(".gPic li").eq(i).show();
        $(".gName span:eq(0)").css("width","1")
    })


    $(".gName li").hover(function(){
        i=$(this).index();
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

