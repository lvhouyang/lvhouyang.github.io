// 登录模块
$(function(){
    var yzmArr = [];
    var yzmString = '';
    for(var i=48;i<=122;i++){
        if((i>=58 && i<=64) || (i>=91 && i<=96)){
            continue;
        }
        yzmArr.push(String.fromCharCode(i))
    }
    // 弹出登录框
    $('#login-pop').click(function(){
            $('.login').fadeIn(); 
            $('.cover').show();     
    });
    $('.cover').click(function(){
        $('.login').fadeOut(); 
        $(this).hide();
    })
    getYzm();
    // 切换验证码
    $('#yzm').click(function(){
        getYzm();
    });
    // 生成验证码
    function getYzm(){
        var tempYzm = [];
        for(var i =0;i<4;i++){
            var random = Math.floor(Math.random()*62)
            tempYzm.push(yzmArr[random]);
        }
        yzmString = tempYzm.join(',').replace(/\,/g,'');
        $('#yzm').text(yzmString);
    };
    // 短信验证码登录
    $('.change').click(function(){
        if($(this).text().indexOf('手机') >-1){
            $(this).text('账号密码登录');
            $('.message').show();
            $('.pass').hide();
        }else {
            $(this).text('手机验证码登录');
            $('.message').hide();
            $('.pass').show();
        }
    });
    // 获取短信验证码
    $('.getYzm').click(function(){
        if($(this).text().indexOf('s') > -1){
            return false;
        }
        var time = 5;
        var self = $(this);
        var timer =  setInterval(function(){
            time --;
            self.text(time+'s后再次获取').css({'cursor':'not-allowed','color':'grey'});
            if(time == 0){
                clearTimeout(timer);
                self.text('获取验证码').css({'cursor':'pointer','color':'#003ab5'});
            }
        },1000);
    });
    // 登录
    $('.login-btn').click(function(){
        if($('#input-yzm').val().toLowerCase()!==$('#yzm').text().toLowerCase()){
            $.fn.toast('请输入正确的验证码。',3000);
            return false;
        }else {
            localStorage.setItem('userinfo',JSON.stringify({'username':$('#userId').val(),'password':$('#password').val()}));
        }
    });
    //切换二维码登录
    $('.login-type a').click(function(){
        // if($(this).className="")
        // console.log($(this).prop('class'))
        if($(this).hasClass('on')){
            return false;
        }
        var target = $(this).prop('class');
        $(this).addClass('on').siblings().removeClass('on');
        if(target.indexOf('ewm')>-1){
            $('.form').hide();
            $('.ewm').show();
        }else {
            $('.form').show();
            $('.ewm').hide();
        }
    });
})