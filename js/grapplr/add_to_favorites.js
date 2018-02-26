document.onkeyup = function(event) {
    var site_name = document.getElementById("site").value;
    if (site_name.length > 0){
        document.getElementById("window").style.width = "360px";
        document.getElementById("hint").style.opacity = "0";
        document.getElementById("go").style.opacity = "1";
        document.getElementById("go").style.height = "75px";
    } else{
         document.getElementById("window").style.width = "275px";
        document.getElementById("hint").style.opacity = "1";
        document.getElementById("go").style.opacity = "0";
        document.getElementById("go").style.height = "0px";
    }
}