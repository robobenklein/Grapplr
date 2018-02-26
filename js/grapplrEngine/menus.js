document.getElementById("settings_toggle").onclick = function (){
        document.getElementById("settings").style.right = "-10";
        document.getElementById("overlay").style.visibility = "visible";
}
function unloadMenus(){
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
    $('.menuR').css("right", "-310");
    $('.menuL').css("left", "-310");
    document.getElementById("overlay").style.visibility = "hidden";
}
document.getElementById("overlay").onclick = function (){
    unloadMenus();
}
document.getElementById("query").onclick = function (){
    unloadMenus();
}
$('.optionR').click(function (){
    $next = this.value;
    document.getElementById($next).style.right = "-10";
});
$('.optionL').click(function (){
    $next = this.value;
    document.getElementById($next).style.left = "-10";
});
$('.back').click(function (){
    var parent = $(this).parents().eq(1).prop("id");
    document.getElementById(parent).style.right = "-310";
});

$('#menu_chrome_localurl_settings').click(function () {
    load_chrome_url('settings');
});
$('#menu_chrome_localurl_history').click(function () {
    load_chrome_url('history');
});
$('#menu_chrome_localurl_extensions').click(function () {
    load_chrome_url('extensions');
});
