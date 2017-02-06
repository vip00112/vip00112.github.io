// gnav 열림/닫힘
$(".wrap.top .gnav").click(function () {
    $(this).toggleClass("on");
    $(".wrap.header .gnav>.menu").toggleClass("on");

    if ($(this).hasClass("on")) {
        $(this).find(".fa").removeClass("fa-caret-down");
        $(this).find(".fa").addClass("fa-caret-up");
        $(window).scrollTop(0)
    } else {
        $(this).find(".fa").removeClass("fa-caret-up");
        $(this).find(".fa").addClass("fa-caret-down");
    }
});