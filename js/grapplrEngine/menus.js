
var menuToggle = 0;
document.getElementById("settings_toggle").onclick = function (){
    if (menuToggle == 0){
        menuToggle = 1;
//        document.getElementById("todo").style.display = "inline-block";
        document.getElementById("settings").style.opacity = "1";
        document.getElementById("settings").style.top = "50";
        document.getElementById("overlay").style.visibility = "visible";
    } else {
        menuToggle = 0;
//        document.getElementById("todo").style.display = "none";
        document.getElementById("settings").style.opacity = "0";
        document.getElementById("settings").style.top = "30";
        document.getElementById("overlay").style.visibility = "hidden";
    }
}
function unloadMenus(){
        menuToggle = 0;
        document.getElementById("settings").style.opacity = "0";
        document.getElementById("settings").style.top = "30";
        document.getElementById("overlay").style.visibility = "hidden";
}
document.getElementById("overlay").onclick = function (){
    unloadMenus();
}
document.getElementById("query").onclick = function (){
    unloadMenus();
}