function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var backgroundImage = "url('" + e.target.result + "')";
                document.body.style.backgroundImage = backgroundImage;
                localStorage.setItem("imgData", backgroundImage);
                window.location.replace("grapplr.html");
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    document.getElementById("changebg").onchange = function(){
        readURL(this);
    }
window.onerror = function(){
    alert("your background image is too large to save. Try another one instead! :)");
     document.getElementById("load").style.display = "none";
}