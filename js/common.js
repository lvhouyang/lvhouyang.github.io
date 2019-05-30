$(function(){
    var imgList = $('img');
    console.log(imgList)
    for(var i=0;i<imgList.length;i++){
        if(imgList[i].className == ''){
            imgList[i].className = 'img'+i;
        }else {
            imgList[i].className = ''+imgList[i].className+' img'+i+''
        }
        var widtH = $('.img'+i+'').width();
        var heighT = $('.img'+i+'').height()
        $('.img'+i+'').attr('src','');
       $('.img'+i+'').css({'background':'url(../images/loading.gif) no-repeat center center',width:widtH,height:heighT});
    }
})