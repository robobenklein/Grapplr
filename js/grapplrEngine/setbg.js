window.onload = function(){
    var backgroundImage = localStorage.getItem('imgData');
    document.body.style.backgroundImage = backgroundImage;
    document.getElementById("changebg").style.backgroundImage = backgroundImage;
}