window.onload = function(){
    var slide0 = document.getElementById("slide");
    var slide1 = document.getElementById("slide1");
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");
    var slide4 = document.getElementById("slide4");
    var slide5 = document.getElementById("slide5");
    var slide6 = document.getElementById("slide6");
    var slide7 = document.getElementById("slide7");
    var reminders = [];
    localStorage.setItem("opacityVal", ".50");
    localStorage.setItem("blurVal", "0");
    localStorage.setItem("imgData","url(../../images/default_wallpaper/white.png");
    localStorage.setItem('remindersLocal', JSON.stringify(reminders));
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
        var collect = true;
        localStorage.setItem("collect", collect);
        slide2.style.right = "100%";
        slide3.style.right = "0";
    }
    document.getElementById("rejectData").onclick= function(){
        var collect = false;
        localStorage.setItem("collect", collect);
        slide2.style.right = "100%";
        slide3.style.right = "0";
    }
    document.getElementById("next1").onclick = function(){
        var name = document.getElementById("name").value;
        localStorage.setItem("name", name);
        slide2.style.right = "0";
        slide1.style.right = "100%";
    }
    document.getElementById("engGoogle").onclick = function(){
        var eng = "http://google.com/search?=";
        localStorage.setItem("searchEngine", eng);
        slide3.style.right = "100%";
        slide4.style.right = "0";
    }
    document.getElementById("engYahoo").onclick = function(){
        var eng = "http://yahoo.com/search?=";
        localStorage.setItem("searchEngine", eng);
        slide3.style.right = "100%";
        slide4.style.right = "0";
    }
    document.getElementById("engBing").onclick = function(){
        var eng = "http://bing.com/search?=";
        localStorage.setItem("searchEngine", eng);
        slide3.style.right = "100%";
        slide4.style.right = "0";
    }
    document.getElementById("musicSoundcloud").onclick = function(){
        var music = "http://soundcloud.com/search?=";
        localStorage.setItem("musicEngine", music);
        slide4.style.right = "100%";
        slide5.style.right = "0";
    }
    document.getElementById("musicYouTube").onclick = function(){
        var music = "https://www.youtube.com/results?search_query=";
        localStorage.setItem("musicEngine", music);
        slide4.style.right = "100%";
        slide5.style.right = "0";
    }
    document.getElementById("videoYouTube").onclick = function(){
        var video = "https://www.youtube.com/results?search_query=";
        localStorage.setItem("videoEngine", video);
        slide5.style.right = "100%";
        slide6.style.right = "0";
    }
    document.getElementById("videoVimeo").onclick = function(){
        var video = "https://vimeo.com/search?q=";
        localStorage.setItem("videoEngine", video);
        slide5.style.right = "100%";
        slide6.style.right = "0";
    }
    document.getElementById("videoDefault").onclick = function(){
        var video = "https://www.youtube.com/results?search_query=";
        localStorage.setItem("videoEngine", video);
        slide5.style.right = "100%";
        slide6.style.right = "0";
    }
    document.getElementById("zip").onkeyup = function(){
        var zip = document.getElementById("zip").value;
        var length = zip.length;
        if(length > 4){
            document.getElementById("next6").style.display = "inline";
            localStorage.setItem("zipCode", zip);
        }else{
            document.getElementById("next6").style.display = "none";
        }
    }
    document.getElementById("next6").onclick = function(){
        slide6.style.right = "100%";
        slide7.style.right = "0";
        localStorage.setItem("hasSet", "1");
    }
    document.getElementById("continue").onclick = function(){
        window.location.assign("grapplr.html");
    }
}
    
function loadConfig(){
    var hasSet = JSON.parse(localStorage.getItem('hasSet'));
    if(hasSet == null){
        window.location.assign("setup.html");
    } else {
    }
}