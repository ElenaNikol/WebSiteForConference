$(document).ready(function () {
    $('.prog').hover(function () {
        $("#progDropDown").css("display","block");
        $(this).css("background-color","rgba(255, 255, 255, 0.7)");
        $(this).css("height","100px");
        $(".prog a").css("color","black");
    },function () {
        $('#progDropDown').css("display","none");
        $(this).css("background-color","transparent");
        $(".prog a").css("color","white");
        $(".fix a").css("color","black");
        $(".fix ul li a").css("color","black");
    });
});