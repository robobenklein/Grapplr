window.onload = function(){
    var slide0 = document.getElementById("slide");
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");
    var slide4 = document.getElementById("slide4");
    var slide5 = document.getElementById("slide5");
    var slide6 = document.getElementById("slide6");
    var name;
    var collect;
    var dftEng;
    var dftMusic;
    var dftVideo;
    var location;
    var hasSet;
    document.getElementById("next0").onclick = function(){
        slide1.style.right = "0";
        slide0.style.right = "100%";
    }
    document.getElementById("name").onkeyup = function(){
        var name = document.getElementById("name").value;
        var length = name.length;
        if(length > 1){
            document.getElementById("next1").style.display = "inline";
        }else{
            document.getElementById("next1").style.display = "none";
        }
    }
    document.getElementById("acceptData").onclick = function(){
        slide2.style.right = "100%";
        slide3.style.right = "0";
    }
    document.getElementById("rejectData").onclick= function(){
        slide2.style.right = "100%";
        slide3.style.right = "0";
    }
    document.getElementById("next1").onclick = function(){
        slide2.style.right = "0";
        slide1.style.right = "100%";
    }
}
function loadConfig(){
    var hasSet = JSON.parse(localStorage.getItem('hasSet'));
    if(hasSet == null){
        window.location.assign("setup.html");
    } else {
    }
}