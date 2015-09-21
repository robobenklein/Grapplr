window.onload = function(){
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");
    var info = [];
    document.getElementById("get_started").onclick = function(){
        slide1.style.display = "none";
        slide2.style.display = "block";
        var info = [];
    }
    document.getElementById("next2").onclick = function(){
        var name = document.getElementById("name").value;
        info.push(name);
        
        slide2.style.display = "none";
        slide3.style.display = "block";
    }
    document.getElementById("finish").onclick = function(){
        slide3.style.display = "none";
        var month = document.getElementById("month").value;
        var day = document.getElementById("day").value;
        var birthday = month + " " + day;
        info.push(birthday);
        localStorage.setItem('infoStorage', JSON.stringify(info));
    }
}
function loadConfig(){
    var info = JSON.parse(localStorage.getItem('infoStorage'));
    if(info == null){
        window.location.assign("setup.html");
    } else {
    }
}