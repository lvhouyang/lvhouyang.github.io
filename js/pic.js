var i=0;
var timer=null;
$(function(){
    $(".pic li").click(function(){
        window.location.href = "More-Movie.html"
    })
    function picRun(){
        timer  = setInterval(function () {
            $(".pic li").eq(i).fadeIn('slow').siblings( $(".pic li")).hide();
            $(".pic span").eq(i).addClass("current").siblings( $(".pic span")).removeClass("current")
            i++;
            if(i==5){
                i=0;
            }

        },3000)
    }
    picRun();
    $(".pic li").hover(function () {
        clearInterval(timer)
    }, function () {
        picRun();
    })
    $(".pic").hover(function(){
        $(".pic-prev").stop().animate({opacity:"1"},1000)
        $(".pic-next").stop().animate({opacity:"1"},1000)
    }, function () {
        $(".pic-prev").stop().animate({opacity:"0"},1000)
        $(".pic-next").stop().animate({opacity:"0"},1000)
    })
    $(".pic-prev").click( function () {
        if(i==0){
            i=5
        }
        i--;
        $(".pic li").eq(i).fadeIn('slow').siblings( $(".pic li")).hide();
        $(".pic span").eq(i).addClass("current").siblings( $(".pic span")).removeClass("current")
    })
    $(".pic-next").click( function () {
        if(i==4){
            i=-1
        }
        i++;
        $(".pic li").eq(i).fadeIn('slow').siblings( $(".pic li")).hide();
        $(".pic span").eq(i).addClass("current").siblings( $(".pic span")).removeClass("current")
    })
    $(".pic span").hover(function () {
        $(this).addClass("current").siblings( $(".pic span")).removeClass("current")
        var j = $(this).index();
        $(".pic li").eq(j).fadeIn('slow').siblings( $(".pic li")).hide();

    })
})
