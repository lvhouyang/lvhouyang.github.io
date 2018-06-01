var i=0;
$(function () {
        //$(".detail-list li").eq(0).css("border","1px solid red")
        $(".detail-list li").hover(function () {
        //$(".detail-list li").css("border","0px solid red");
        i=$(this).index();
        //$(".detail-list li").eq(i).css("border","1px solid red")
        $(".phone-pic-detail img").eq(i).show().siblings($(".phone-pic-detail img")).hide()
    })
    $(".phone-pic-detail").hover(function () {
        $(".mask").show();
        $(".pic-big").show()
    }, function () {
        $(".mask").hide()
        $(".pic-big").hide()
    })
   $(".phone-color-name").click(function () {
      $(this).css("border","1px solid red").siblings($(".phone-color-name")).css("border","1px solid #f1f1f1")
   })
   $(".chose-type span").click(function () {
      $(this).css("border","1px solid red")
   })

})
//放大镜
window.onload = function(){
   var biglist = document.getElementsByClassName("phone-pic-detail")[0];
   var bigpic = biglist.children;
   var list = document.getElementsByClassName("detail-list")[0];
   var small = document.getElementsByClassName("phone-pic-detail")[0];
   var mask = small.children[5];
   var big = document.getElementsByClassName("phone-pic")[0];

   var li = list.children[0].children;
   for(var i=0;i<li.length;i++){
      li[i].onmouseover = function () {
         for(var j=0;j<li.length;j++){
            li[j].style.border = "none"
         }
         this.style.border = "1px solid red";
      }
   }

   small.onmousemove = function(event){
      var event = event || window.event
      var pagex = event.page ||scroll().left + event.clientX;
      var pagey = event.page ||scroll().top + event.clientY;
      var x = pagex - big.offsetLeft - mask.offsetWidth/2
      var y = pagey - big.offsetTop - mask.offsetHeight/2
      if(x<0){
         x=0
      }else if(x>small.offsetWidth-mask.offsetWidth){
         x=  small.offsetWidth-mask.offsetWidth
      }
      if(y<0){
         y=0
      }else if(y>small.offsetHeight-mask.offsetHeight){
         y=small.offsetHeight-mask.offsetHeight;
      }
      mask.style.left = x + "px";
      mask.style.top = y + "px";


      var bigImg = document.getElementsByClassName("pic-big")[0].children[0];
      console.log(bigImg)
      var bl = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);
      var xx = x*bl;
      var yy = y*bl;
      bigImg.style.marginLeft = -xx + "px"
      bigImg.style.marginTop = -yy + "px";

   }
   function $(id) { return document.getElementById(id);}
   function show(id) { $(id).style.display = "block";}
   function hide(id) { $(id).style.display = "none";}
   function scroll() {  // 开始封装自己的scrollTop
      if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
         // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
         return {
            left: window.pageXOffset,
            top: window.pageYOffset
         }
      }
      else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
         return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
         }
      }
      return {   // 未声明 DTD
         left: document.body.scrollLeft,
         top: document.body.scrollTop
      }
   }
}



