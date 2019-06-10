$(function () {
    var timer = null;  //函数节流c
    var scrollTop = 0;
    var imgEl = {};  //页面所有图片距离顶端的高度
    $.each($('img:not(.noloading)'), function (index, item) {
        var itemTop = $('img:not(.noloading)').eq(index).offset().top;
        imgEl[index] = itemTop;
    })
    console.log(imgEl)
    var clientHeight = scrollTop + $(window).height(); //可视区域+卷去的高度
    if ($(document).scrollTop() > 0) { //用户第一次进来处于页面中间  加载用户可视区域以及以上所有图片
        scrollTop = $(document).scrollTop();
        for (var i in imgEl) {
            if ((scrollTop + $(window).height()) > imgEl[i]) {  //如果用户可视高度加上所卷去的高度 大于图片距离浏览器顶部距离 就把data-src的内容给src
                if ($('img:not(.noloading)').eq(i).attr('src').indexOf('loading') > -1) {
                    $('img:not(.noloading)').eq(i).hide();
                    $('img:not(.noloading)').eq(i).attr('src', $('img:not(.noloading)').eq(i).attr('data-src')).fadeIn('slow');
                }
            }
        }
    } else { //用户首屏处于页面顶端 加载用户能看到的所有图片
        for (var i in imgEl) {
            if (clientHeight > imgEl[i]) {
                if ($('img:not(.noloading)').eq(i).attr('src').indexOf('loading') > -1) {
                    $('img:not(.noloading)').eq(i).hide();
                    $('img:not(.noloading)').eq(i).attr('src', $('img:not(.noloading)').eq(i).attr('data-src')).fadeIn('slow');
                }
            }
        }
    }
    window.onscroll = function () {  //用户滚动页面
        if (timer) {         //函数节流 
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            scrollTop = $(document).scrollTop();   //页面卷去的距离
            for (var i in imgEl) {
                if ((scrollTop + $(window).height()) > imgEl[i]) {
                    if ($('img:not(.noloading)').eq(i).attr('src').indexOf('loading') > -1) {   //图片是否已经被赋予真实路径      
                        $('img:not(.noloading)').eq(i).hide();     
                        $('img:not(.noloading)').eq(i).attr('src', $('img:not(.noloading)').eq(i).attr('data-src')).fadeIn('slow');//如果用户可视高度加上所卷去的高度 大于图片距离浏览器顶部距离 就把data-src的内容给src
                    }
                }
            }
            if (scrollTop >= $(document).height() - $(window).height()) {
                window.onscroll = null;         //如果用户滑动到底部   去除滚动事件
            }
        }, 200);
    }
})