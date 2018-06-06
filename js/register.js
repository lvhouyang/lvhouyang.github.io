window.onload = function () {
    //注册按钮事件
    var btn = document.getElementById("Register-btn");
    btn.onmouseover = function () {
        this.style.backgroundColor = "red"
        this.style.color = "white"
    }
    btn.onmouseout = function () {
        this.style.backgroundColor = ""
        this.style.color = "white"
    }

    ///
    var password = document.getElementById("password");
    function addEvent(ele,fn){
        document.getElementById(ele).onblur = fn;
    }
    function setClassname(a,b){
        var span = a.nextSibling;
        span.className = b;


    }
    function setInnertext(a,b){
        var span = a.nextSibling;
        span.innerHTML = b;
    }
    addEvent("inp1",function(){
        if(/^[0-9a-zA-Z\u4e00-\u9fa5]{4,10}$/.test(this.value)){
            setClassname(this,"right");
            setInnertext(this,"可以使用")
            this.style.border = ""
        }else{
            setClassname(this,"wrong");
            setInnertext(this,"格式错误")
            this.style.border = "2px solid red"
        }
    })
    addEvent("inp2",function(){
        if(/^[a-zA-Z0-9_\-$]{6,18}$/.test(this.value)){
            setClassname(this,"right");
            setInnertext(this,"可以使用")
            this.style.border = ""
        }else{
            setClassname(this,"wrong");
            setInnertext(this,"格式错误")
            this.style.border = "2px solid red"
        }
    })
    addEvent("inp3",function(){
        var i2 = document.getElementById("inp2").value;
        var i3 = document.getElementById("inp3").value;
        if(i2==i3&&i3!==""){
            setClassname(this,"right");
            setInnertext(this,"密码一致")
            this.style.border = ""
            password.className = "pwd str1";
            if(/^[A-Za-z0-9]+[_$][A-Za-z0-9]*$/.test(this.value)){
                password.className = "pwd str4";
            }else if(/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]$/.test(this.value)){
                password.className = "pwd str3";
            }else if(/^([a-z].*[A-Z])|([A-Z].*[a-z])$/.test(this.value)){
                password.className = "pwd str2";
            }
        }else{
            setClassname(this,"wrong");
            setInnertext(this,"两次密码不一致")
            this.style.border = "2px solid red"
        }
    })
    addEvent("inp4",function(){
        if(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.value)){
            setClassname(this,"right");
            setInnertext(this,"可以使用")
            this.style.border = ""
        }else{
            setClassname(this,"wrong");
            setInnertext(this,"格式错误")
            this.style.border = "2px solid red"
        }
    })
    addEvent("inp6",function(){
        if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.value)){
            setClassname(this,"right");
            setInnertext(this,"可以使用")
            this.style.border = ""
        }else{
            setClassname(this,"wrong");
            setInnertext(this,"格式错误")
            this.style.border = "2px solid red"
        }
    })
    addEvent("s1",function(){
        if(/^[\u4e00-\u9fa5]/.test(this.value)){
            setClassname(this,"right");
            setInnertext(this,"可以使用")
            this.style.border = ""

        }else{
            setClassname(this,"wrong");
            setInnertext(this,"格式错误")
            this.style.border = "2px solid red"
        }
    })
    //滑动验证
}
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
                $span.html("滑动登录验证");
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
    //直接登录
    $("#Tologin").click(function () {
        window.location.href = "index.html?count=1";
    })

})
