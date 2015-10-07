window.onload = function(){
    //Apply customizations
    var backgroundImage = localStorage.getItem('imgData');
    var opacity = localStorage.getItem('opacityVal');
    document.getElementById("dots").style.opacity = opacity;
    var opacityValue = opacity.replace(/./,"");
    document.getElementById("opacity").value = opacityValue;
    var blur = localStorage.getItem('blurVal');
    document.getElementById("blur").value = blur;
    document.getElementById("bg").setAttribute("style","-webkit-filter: blur(" + blur + "px); background-image:" + backgroundImage);
    document.getElementById("changebg").style.backgroundImage = backgroundImage;
}
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var backgroundImage = "url('" + e.target.result + "')";
                document.getElementById("bg").style.backgroundImage = backgroundImage;
                 document.getElementById("changebg").style.backgroundImage = backgroundImage;
                localStorage.setItem("imgData", backgroundImage);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    document.getElementById("changebg").onchange = function(){
        readURL(this);
    }
document.getElementById("setdots").onclick = function(){
    document.getElementById("dots").style.backgroundColor = "transparent";
    var overlay = "url(../images/dot_overlay.png";
    document.getElementById("dots").style.backgroundImage = overlay;
    localStorage.setItem("overlayPat", overlay);
}
document.getElementById("nodots").onclick = function(){
    document.getElementById("dots").style.backgroundColor = "#000";
    document.getElementById("dots").style.backgroundImage = "url(../images/dot_overlay.png";
    var overlay = "background-image: url(../images/dot_overlay.png; background-color: #000;";
    localStorage.setItem
}
document.getElementById("setstripe").onclick = function(){
    document.getElementById("dots").style.backgroundColor = "transparent";
    document.getElementById("dots").style.backgroundImage = "url(../images/stripe.png";
}
document.getElementById("opacity").onmousemove = function(){ 
    var opacity = document.getElementById("opacity").value;
    document.getElementById("dots").style.opacity = "." + opacity;
    localStorage.setItem("opacityVal", "." + opacity);
}
document.getElementById("blur").onmousemove = function(){
    var backgroundImage = localStorage.getItem('imgData');
    var blur = document.getElementById("blur").value;
    document.getElementById("bg").setAttribute("style","-webkit-filter: blur(" + blur + "px); background-image:" + backgroundImage);
    localStorage.setItem("blurVal", blur);
}
document.getElementsByClassName("select_bubble").onmousemove = function(){
    alert("hi!");
}