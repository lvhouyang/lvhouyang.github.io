//返回顶部
window.onload = imgFade;
window.onscroll = imgFade;
$(".return-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
})
function imgFade() {
    var eleTop = $('.concert-show').offset().top;
    var isFirst = true;
    // window.onscroll = function(){
    if ($(document.documentElement).scrollTop() > 2150) {
        $(".return-top").show();
    } else {
        $(".return-top").hide();
    }
    var cliHeight = $(window).height();
    var scroll = $(document.documentElement).scrollTop() + cliHeight;
    if (scroll > eleTop && isFirst == true) {
        for(var i=0;i<$('.concert-show ul li').length;i++){
            if(i%2==0){
                $('.concert-show ul li').eq(i).addClass('fadeLeft')
            }else {
                $('.concert-show ul li').eq(i).addClass('fadeRight')
            }
        }
        isFirst = false;
    }
}




