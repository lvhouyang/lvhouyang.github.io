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

})
