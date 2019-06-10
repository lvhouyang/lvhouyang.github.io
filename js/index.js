$(function () {
    var timer = null;
    var i = 0;
    var jdImgList = ['images/house-right1.jpg', 'images/house-right2.jpg', 'images/house-right3.jpg', 'images/house-right4.jpg', 'images/house-right5.jpg', 'images/house-right6.jpg', 'images/house-right7.jpg', 'images/house-right8.jpg'];
    var znImgList = ['images/zn-right1.jpg', 'images/zn-right2.jpg', 'images/zn-right3.jpg', 'images/zn-right4.jpg', 'images/zn-right5.jpg', 'images/zn-right6.jpg', 'images/zn-right7.jpg', 'images/zn-right8.jpg',]
    var dpImgList = ['images/dp-right1.jpg', 'images/dp-right2.jpg', 'images/dp-right3.jpg', 'images/dp-right4.jpg', 'images/dp-right5.jpg', 'images/dp-right6.jpg', 'images/dp-right7.jpg', 'images/dp-right8.jpg',]
    var pjImgList = ['images/pj-right1.jpg', 'images/pj-right2.jpg', 'images/pj-right3.jpg', 'images/pj-right4.jpg', 'images/pj-right5.jpg', 'images/pj-right6.jpg', 'images/pj-right7.jpg', 'images/pj-right8.jpg',]
    var newList = jdImgList.concat(znImgList).concat(dpImgList).concat(pjImgList);
    // toast方法定义
    $.fn.extend({
        toast: function (val,time) {
            toast(val,time);
        }
    });
    function toast(val,time){
        $('.toast').text(val).fadeIn();
        setTimeout(function(){
            $('.toast').fadeOut()
        },time);
    }
    // 购物车
    $('.header_right .car').hover(function () {
        $(this).children('.maycar').stop().slideDown();
    }, function () {
        $(this).children('.maycar').stop().slideUp();
    });
    // nav触摸事件
    $('.nav_item li a:not(.nochild)').mouseover(function () {
        $('.list-wraper').stop().slideDown();
    });
    $('.list-wraper').mouseleave(function () {
        $(this).stop().slideUp();
    });
    //全部分类
    $('aside ul').hover(function () {
        // var random = Math.floor(Math.random() * 12);
        var html = '';
        // random = random + 12;
        newList = newList.sort(function () {
            return 0.5 - Math.random();
        });
        for (var i = 0; i < 24; i++) {
            html += '<ul class="children-list"><li class="child"><img class="noloading" src="' + newList[i] + '">手机</li></ul>'
        }
        $('.cate-children').html(html)
        $('.cate-children').show();
    }, function () {
        $('.cate-children').hide();
    });

    // 图片轮播方法
    bannerAnimate();
    function bannerAnimate() {
        clearInterval(timer);
        timer = setInterval(function () {
            $('.img-swiper ul li').eq(i).fadeIn().siblings().hide();
            $('.img-swiper .num-item span').eq(i).addClass('on').siblings().removeClass('on');
            if (i == 4) {
                i = -1;
            }
            i++;
        }, 2000);
    }

    // hover图片清除定时器
    $('.img-swiper').hover(function () {
        clearInterval(timer);
    }, function () {
        bannerAnimate();//启动定时器
    });
    // 向左
    $('.left-pic').click(function () {
        if (i == 0) {
            i = 5;
        }
        i--;
        console.log(i);
        $('.img-swiper ul li').eq(i).fadeIn().siblings().fadeOut();
        $('.img-swiper .num-item span').eq(i).addClass('on').siblings().removeClass('on');
    });
    // 向右
    $('.right-pic').click(function () {
        if (i == 4) {
            i = -1;
        }
        i++;
        console.log(i);
        $('.img-swiper ul li').eq(i).fadeIn().siblings().fadeOut();
        $('.img-swiper .num-item span').eq(i).addClass('on').siblings().removeClass('on');
    });
    // 小圆点hover效果
    $('.img-swiper .num-item span').hover(function () {
        var index = $(this).index();
        i = index;
        $('.img-swiper ul li').eq(index).fadeIn().siblings().fadeOut();
        $(this).addClass('on').siblings().removeClass('on');
    })
    // 家电右侧导航
    $('.house-cate ul li').hover(function () {
        if ($(this).hasClass('on')) {
            return false;
        }
        var type = $(this).parent('ul').attr('type')
        if (type == 'jd') {
            jdImgList = jdImgList.sort(function () {
                return 0.5 - Math.random();
            });
            Tab('houseUse', jdImgList);
        } else if (type == 'zn') {
            znImgList = znImgList.sort(function () {
                return 0.5 - Math.random();
            });
            Tab('Intelligence', znImgList);
        } else if (type == 'dp') {
            dpImgList = dpImgList.sort(function () {
                return 0.5 - Math.random();
            });
            Tab('collocation', dpImgList);
        } else if (type == 'pj') {
            pjImgList = pjImgList.sort(function () {
                return 0.5 - Math.random();
            });
            Tab('parts', pjImgList);
        }
        $(this).addClass('on').siblings().removeClass('on');
    });
    // 上浮
    $('.detail-right ul li').hover(function () {
        $(this).children('.comment').stop().animate({ 'bottom': '0px', 'opacity': 1 }, 200)
    }, function () {
        $(this).children('.comment').stop().animate({ 'bottom': '-75px', 'opacity': 0 }, 200)
    });
    //栏目切换效果
    function Tab(el, imgList) {
        // 家电
        $.each(imgList, function (index, item) {
            $('.' + el + ' .detail .detail-right li').children('a').eq(index).children('img').attr('src', item);
        })
    };
    // 内容部分切换
    $('.cn .left').click(function () {
        var num = $(this).parent().find('ul').position().left;
        if (num == 0) {
            return false;
        }
        var i = Math.abs(num / 296);
        $(this).parent().find('.item-num span').eq(i - 1).addClass('on').siblings().removeClass('on');
        num = num + 296;
        $(this).parent().find('ul').stop().animate({ 'left': num + 'px' }, 500);//向左
    });
    $('.cn .right').click(function () {
        var num = $(this).parent().find('ul').position().left;
        if (num == '-592') {
            return false;
        }
        var i = Math.abs(num / 296);
        $(this).parent().find('.item-num span').eq(i + 1).addClass('on').siblings().removeClass('on');
        num = num - 296;
        $(this).parent().find('ul').stop().animate({ 'left': num + 'px' }, 500);//向右
    });
    //  小点触摸事件
    $('.cn .item-num span').click(function () {
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $(this).parent().parent().find('ul').stop().animate({ 'left': -i * 296 + 'px' }, 500);
    });
    // 视频播放按钮
    $('.video a').hover(function () {
        $(this).children('.cover-btn ').stop().fadeIn('800');
        $(this).children('.cover-btn ').children('img').addClass('scal')
    }, function () {
        $(this).children('.cover-btn ').stop().fadeOut('800');
        $(this).children('.cover-btn ').children('img').removeClass('scal')
    })
})