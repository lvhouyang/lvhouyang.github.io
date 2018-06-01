$(function(){
    var liArr = $(".phone-show li");
    for(var q=0;q<liArr.length;q++){
        $(".phone-show li").eq(q).css("background","url(images/"+(q+1)+".jpg) no-repeat");
    }
    $(".phone-show li").eq(0).css("width","800")
    $(".phone-show li:gt(0)").css("width","100")
    $(".phone-show li").hover(function(){
        var i = $(this).index();
        $(".phone-show li:not(:eq(i))").stop().animate({width:"100"},300)
        $(".phone-show li").eq(i).stop().animate({width:"800"},300);
    },function(){
        $(".phone-show li").stop().animate({width:"240"},300);
    })
})
