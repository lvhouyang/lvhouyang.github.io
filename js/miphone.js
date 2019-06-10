$(function(){
    var j=0;
    var timer1 = null;
    function phonerun(){
        timer1 = setInterval(function () {
            $(".phone-show li:not(:eq(j))").stop().animate({width:"100"},800)
            $(".phone-show li").eq(j).stop().animate({width:"827"},800);
            j++;
            if(j==4){
                j=-1;
            }

        },2000)
    }
    phonerun();
    var liArr = $(".phone-show li");
    for(var q=0;q<liArr.length;q++){
        $(".phone-show li").eq(q).css({"background-image":"url(images/"+(q+1)+".jpg)","background-size":"cover"});
    }
    $(".phone-show li").eq(0).css("width","827")
    $(".phone-show li:gt(0)").css("width","100")
    $(".phone-show li").hover(function(){
        clearInterval(timer1);
        var i = $(this).index();
        $(".phone-show li:not(:eq(i))").stop().animate({width:"100"},800)
        $(".phone-show li").eq(i).stop().animate({width:"827"},800);
    },function(){
        phonerun()
        
    })
})
