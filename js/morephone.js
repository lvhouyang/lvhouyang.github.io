$(function () {
    $("#more-phone").css({borderBottom:"3px solid #C81623",
        color:"#C81623"});

    $(".phone-show li").hover(function(){
        var i = $(this).index();
        $(".phone-show li .desc").eq(i).hide()
        $(".phone-show .ph_buy").eq(i).css("opacity","1")
        $(".phone-show .ph_buy").eq(i).stop().animate({
            bottom:"10"
        },300)
    }, function () {
        $(".phone-show li .desc").show()
        $(".phone-show .ph_buy").css("opacity","0")
        $(".phone-show .ph_buy").stop().animate({
            bottom:"-75"
        },300)
    })
    $(".phone-show a").attr("href","Phone-detail.html")
    $(".phone-show button").click(function () {
        location.href  = "Phone-detail.html"
    })
    //选择手机类型
    $(".phone-banner-list a").eq(2).css({backgroundColor:"#E80000",
        color:"white"})
    $(".phone-banner-list a:gt(0)").click(function () {
        $(".phone-banner-list a").css({backgroundColor:"#ffffff",
            color:"#666666"})

        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".phone-banner-list1 a").eq(1).css({backgroundColor:"#E80000",
        color:"white"})
    $(".phone-banner-list1 a:gt(0)").click(function () {
        $(".phone-banner-list1 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".phone-banner-list2 a").eq(2).css({backgroundColor:"#E80000",
        color:"white"})
    $(".phone-banner-list2 a:gt(0)").click(function () {
        $(".phone-banner-list2 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".phone-banner-list3 a").eq(1).css({backgroundColor:"#E80000",
        color:"white"})
    $(".phone-banner-list3 a:gt(0)").click(function () {
        $(".phone-banner-list3 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".phone-banner-list4 a").eq(1).css({backgroundColor:"#E80000",
        color:"white"})
    $(".phone-banner-list4 a:gt(0)").click(function () {
        $(".phone-banner-list4 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })

})
