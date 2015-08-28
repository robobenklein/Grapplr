function speak(){
    var query = document.getElementById("query").value;
        if(query.length  < 1 && speechToggle == 0){
            $('#query').blur();
            console.log("listening");
            document.getElementById("query").value = "";
            document.getElementById("query").placeholder = "listening...";
            document.getElementById("speechBg").style.background = "url('../images/loading/listening.png')";
            speechToggle = 1;
            annyang.start();
            console.log(speechToggle);
        } else if(speechToggle != 0){
            console.log("stopped listening");
            annyang.pause();
            document.getElementById("query").placeholder = "start typing or press space to speak";
            document.getElementById("speechBg").style.background = "url('')";
            document.getElementById("speechBg").style.animation = "play 1.5s steps(0);')";
            speechToggle = 0;
        }
    }  