var menuToggle = 0;
document.getElementById("settings_toggle").onclick = function (){
    if (menuToggle == 0){
        menuToggle = 1;
        document.getElementById("settings").style.right = "-10";
        document.getElementById("overlay").style.visibility = "visible";
    } else {
        menuToggle = 0;
        document.getElementById("settings").style.right = "-310";
        document.getElementById("overlay").style.visibility = "hidden";
    }
}
document.getElementById("cs_toggle").onclick = function (){
        document.getElementById("chrome_settings").style.right = "-10";
}
document.getElementById("custo_toggle").onclick = function (){
        document.getElementById("customize").style.right = "-10";
}
document.getElementById("bookmarks_toggle").onclick = function (){
    if (menuToggle == 0){
        menuToggle = 1;
        document.getElementById("bookmarks").style.left = "-10";
        document.getElementById("overlay").style.visibility = "visible";
    } else {
        menuToggle = 0;
        document.getElementById("bookmarks").style.left = "-310";
        document.getElementById("overlay").style.visibility = "hidden";
    }
}
function unloadMenus(){
        menuToggle = 0;
        document.getElementById("settings").style.right = "-310";
        document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("bookmarks").style.left = "-310";
    document.getElementById("chrome_settings").style.right = "-310";
    document.getElementById("customize").style.right = "-310";
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
}
document.getElementById("overlay").onclick = function (){
    unloadMenus();
}
document.getElementById("query").onclick = function (){
    unloadMenus();
}