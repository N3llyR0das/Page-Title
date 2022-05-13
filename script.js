$(".button1").hide();
$(".glad-end").hide();
$(".screaming-end").hide();
$(".start").dblclick(function() {
    $(".button").text("click to start adventure");
    $(".button").hide();
    $(".firstimage").hide();
    $(".title").hide();
    $(".button1").show();
});
$(".button1-left").click(function() {
    $(".screaming-end").show();
    $(".glad-courage").hide();
    $(".button1").hide();
});
$(".button2-right").dblclick(function() {
    $(".screaming-courage").hide();
    $(".glad-end").show();
    $(".button1").hide();
});