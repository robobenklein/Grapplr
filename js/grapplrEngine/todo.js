var menuToggle = 0;
document.getElementById("todo_toggle").onclick = function (){
    if (menuToggle == 0){
        menuToggle = 1;
//        document.getElementById("todo").style.display = "inline-block";
        document.getElementById("todo").style.opacity = "1";
        document.getElementById("todo").style.bottom = "50";
    } else {
        menuToggle = 0;
//        document.getElementById("todo").style.display = "none";
        document.getElementById("todo").style.opacity = "0";
        document.getElementById("todo").style.bottom = "30";
    }
}
        
    