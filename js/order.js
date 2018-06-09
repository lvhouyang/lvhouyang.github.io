$(function () {
    $(".shortcut-nav-menu-one li a:odd").css({backgroundColor:"white",
        color:"#E80000"})
    $(".shortcut-nav-menu-one li a:even").css({backgroundColor:"#f1f1f1",
        color:"#E80000"})
    $(".shortcut-nav-menu-one li a").hover(function () {
        $(this).css({backgroundColor:"#E80000",
                      color:"white"})
    }, function () {
        $(".shortcut-nav-menu-one li a:odd").css({backgroundColor:"white",
            color:"#E80000"})
        $(".shortcut-nav-menu-one li a:even").css({backgroundColor:"#f1f1f1",
            color:"#E80000"})
    })
    $(".shortcut-nav-menu-one li a").on("click", function () {
        $(".shortcut-nav-menu-one li a").css({
            border:""
        })
        $(this).css({
            borderLeft:"3px solid #e80000",
            //borderTop:"2px solid #e80000",
            //borderBottom:"2px solid #e80000"
        })


})
    })
