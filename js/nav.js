$(function () {
    $('.cover-all div').addClass('welcome')
    //语言选择
    $(".site-nav-send").hover(function () {
        $(this).css("backgroundColor","#ffffff")
        $(".language").stop().slideDown(500)
    }, function () {
        $(".language").stop().slideUp(500);
        $(".site-nav-send").css("backgroundColor","#f1f1f1");
    })
    //展开二维码
    $(".jd-tel").hover(function () {
        $(".erweima").stop().slideDown(500)
    }, function () {
        $(".erweima").stop().slideUp(500)
    })
    //右侧导航栏
    $(".right-banner-detail span").hover(function () {
        var i = $(this).index()
        $(".right-banner-detail span em").eq(i).css({
            backgroundColor:'#e80000',
            zIndex:"-1"
        })
        $(".right-banner-detail span em").eq(i).show()
        $(".right-banner-detail span em").eq(i).stop().animate({right:"38",},400)
    }, function () {
        var i = $(this).index();
        $(".right-banner-detail span em").eq(i).css({
            backgroundColor:'#ebdfeb',
            zIndex:"-1"
        })
        $(".right-banner-detail span em").eq(i).stop().animate({right:"-55"},400)

    })


     //关闭广告
    $(".close-banner").click(function () {
            $(".top-banner").stop().animate({height:"0"},1000).queue(function () {
                $(".top-banner").hide();
            })

    })
    //验证滚动条
    $(function(){
        $(".inner").mousedown(function(e){
            var el = $(".inner"),os = el.offset(),dx,$span=$(".outer>span"),$filter=$(".filter-box"),_differ=$(".outer").width()-el.width();
            $(document).mousemove(function(e){
                dx = e.pageX - os.left;
                if(dx<0){
                    dx=0;
                }else if(dx>_differ){
                    dx=_differ;
                }
                $filter.css('width',dx);
                el.css("left",dx);
            });
            $(document).mouseup(function(e){
                $(document).off('mousemove');
                $(document).off('mouseup');
                dx = e.pageX - os.left;
                if(dx<_differ){
                    dx=0;
                    $span.html("滑动以完成验证");
                }else if(dx>=_differ){
                    dx=_differ;
                    $(".outer").addClass("act");
                    $span.html("验证通过");
                    el.html('&radic;');
                }
                $filter.css('width',dx);
                el.css("left",dx);

            })
        })
    })
     //关闭登录框
    $(".close-login").click(function () {
        $(".login").stop().animate({opacity:"0"},1000).queue(function () {
            $(".login").hide();
            $(".mask").stop().animate({opacity:"0"},1500)
            $(".mask").hide()
        })
    })

    //弹出登录框
    $("#login-enter").click(function () {
        $(".login").stop().animate({top:"230"},1000).queue(function(){
            $(".mask").stop().animate({opacity:"0.7"},1000)
            $(".mask").show()
        })
    })
    //从注册页面跳转过来 自动弹出登录框
    if(document.referrer.indexOf("register")!= -1){   //得到网页来源(register页面)不等于-1 说明有register字段
        $("#login-enter").trigger("click");
        document.referrer = "";
        console.log(2)
    }else{
        console.log(1)
    }
    //展开更多分类导航
    $(".shortcut-nav-menu-one").hover(function () {
        $(".shortcut-nav-menu-one-content").show()
    }, function () {
        $(".shortcut-nav-menu-one-content").hide()
    })
    $(".shortcut-nav-menu-one-content").hover(function(){
        $(".shortcut-nav-menu-one-content").show()
    }, function () {
        $(".shortcut-nav-menu-one-content").hide()
    })



})
