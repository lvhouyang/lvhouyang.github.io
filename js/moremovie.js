$(function () {
        $("#submit").hide()
        $("#more-movie").css({borderBottom:"3px solid #C81623",
        color:"#C81623"});
       film();
       $("#loading-more").click(function () {
           film()
       })
       //选择电影类型
        $(".movie-banner-list a").eq(2).css({backgroundColor:"#E80000",
        color:"white"})
        $(".movie-banner-list a:gt(0)").click(function () {
            $(".movie-banner-list a").css({backgroundColor:"#ffffff",
                color:"#666666"})

            $(this).css({backgroundColor:"#E80000",
                          color:"white"})
        })
       function film(){
        $.getJSON('film.json',function (res) {
            console.log(res)
            var json = res;
            for (var i = 0; i < json.subjects.length; i++) {
                var Type = (json.subjects[i].genres).join(",");
                var Fname = json.subjects[i].title;
                var Artist = json.subjects[i].directors;
                for (var k in  Artist) {
                    var Art = Artist[k].name;
                }
                var Imp = json.subjects[i].casts;
                for (var b in Imp) {
                    var Impp = Imp[b].name
//                            console.log(Impp)
                }
                console.log(Imp.length)
                var stt="";
                for(var j=0;j<Imp.length;j++){
//                           console.log(Imp[j].name);
                    if(Imp[j].name==""){
                        stt==""
                    }
                    stt+=Imp[j].name+" ";
                    console.log(stt)
                }

                var Img = json.subjects[i].images.small;
                 Img = Img.replace('https://','https://images.weserv.nl/?url=')
                var str = "<ul class='movie'><li class='logo' style='float: left'><img class='Img' src='" + Img + "'> <li class='detail' style='margin-left: 20px'>" +
                    "<p>　　<a href='#' target='' class='FilmName'>" + Fname + "</a></p>" +
                    " <p><span>　导演：</span><a href='#' target=''class='Artist'>" + Art + "</a></p>" +
                    " <p><span>　主演：</span><a href='#' target=''class='Imp'>" + stt + "</a></p>" +
                    " <p><span>　类型：</span><a href='#'target='' class='Type'>" + Type + "</a></p>" +
                    "</li>" +
                    "</ul>"
                $(".movie-content-show").append(str)
            }
        })

    }
    //电影类型重复
    $(".movie-banner-list1 a").eq(1).css({backgroundColor:"#E80000",
        color:"white"})
    $(".movie-banner-list1 a:gt(0)").click(function () {
        $(".movie-banner-list1 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".movie-banner-list2 a").eq(2).css({backgroundColor:"#E80000",
        color:"white"})
    $(".movie-banner-list2 a:gt(0)").click(function () {
        $(".movie-banner-list2 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".movie-banner-list3 a").eq(1).css({backgroundColor:"#E80000",
        color:"white"})
    $(".movie-banner-list3 a:gt(0)").click(function () {
        $(".movie-banner-list3 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".movie-banner-list4 a").eq(1).css({backgroundColor:"#E80000",
        color:"white"})
    $(".movie-banner-list4 a:gt(0)").click(function () {
        $(".movie-banner-list4 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    $(".movie-banner-list5 a").eq(1).css({backgroundColor:"#E80000",
        color:"white"})
    $(".movie-banner-list5 a:gt(0)").click(function () {
        $(".movie-banner-list5 a").css({backgroundColor:"#ffffff",
            color:"#666666"})
        $(this).css({backgroundColor:"#E80000",
            color:"white"})
    })
    //$(".movie-banner-list6 a").click(function () {
    //    $(".movie-banner-list6 a").css({backgroundColor:"#ffffff",
    //        color:"#666666"})
    //    $(this).css({backgroundColor:"#E80000",
    //        color:"white"})
    //})


})

