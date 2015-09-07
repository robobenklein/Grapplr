function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var backgroundImage = "url('" + e.target.result + "')";
                document.body.style.backgroundImage = backgroundImage;
                localStorage.setItem("imgData", backgroundImage);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    document.getElementById("changebg").onchange = function(){
        readURL(this);
    }