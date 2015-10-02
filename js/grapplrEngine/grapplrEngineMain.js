//Grapplr Engine
//(c) 2015 Preston Gull
//
//License:
//1. This code may be modified, but all sections of commented code must be left intact.
//2. You may not redistribute this code (or any other code within the Grapplr engine) in its entirety, but you may redistribute your section of modified code.
$('#doots').click(function() {
    unloadMenus();
});
var query = document.getElementById("query").value;

//Custom Command Step 1:
//Define Function Toggle
var tod = "AM";
var DownloadToggle = 0;
var FindToggle = 1;
var PlayToggle = 0;
var TweetToggle = 0;
var PostToggle = 0;
var DefineToggle = 0;
var qToggle = 0;
var UploadToggle = 0;
var NavToggle = 0;
var TransToggle = 0;
var speechToggle = 0;
var CalcToggle = 0;
var PlotToggle = 0;
var RemindToggle = 0;

document.onkeyup = function(event) {
    var query = document.getElementById("query").value;
    var query = query.toLowerCase();
    var queryWords = query.split(" ");
    var keyword = query.split(" ", 2)[0];
    var two_keywords = queryWords[0] + " " + queryWords[1];
    var three_keywords = queryWords[0] + " " + queryWords[1] + " " + queryWords[2];

    if (event.keyCode == 32) {
        //        speak();
    } else {
        //        $('#query').focus();

        //      Step 2:
        //      Enter Key Activation
        //      Enter new lines after last else if
        //      Example:
        //
        //      ...
        //      } else if (CommandToggle == 1) {
        //          load();
        //          function();
        //      } else {...

        if (event.keyCode == 13) {
            if (FindToggle == 1) {
                load();
                search();
            } else if (DownloadToggle == 1) {
                load();
                download();
            } else if (PlayToggle == 1) {
                load();
                play();
            } else if (TweetToggle == 1) {
                load();
                tweet();
            } else if (PostToggle == 1) {
                load();
                post();
            } else if (DefineToggle == 1) {
                load();
                define();
            } else if (qToggle == 1) {
                ask();
            } else if (NavToggle == 1) {
                load();
                nav();
            } else if (TransToggle == 1) {
                load();
                translate();
            } else if (CalcToggle == 1) {
                load();
                calculate();
            } else if (PlotToggle == 1) {
                load();
                plot();
            } else if (RemindToggle == 1) {
                clearall();
                remind();
            } else {
                search();
                console.log("searching");
            }
            var query = document.getElementById("query").value;
            var query = query.toLowerCase();
            var queryWords = query.split(" ");
            var keyword = query.split(" ", 2)[0];
            var two_keywords = queryWords[0] + " " + queryWords[1];
            var three_keywords = queryWords[0] + " " + queryWords[1] + " " + queryWords[2];
            document.getElementById("controls").style.width = "0px";
        }

        //      Step 3:
        //      Check query box for index of command
        //      Then set fuction toggle to 1
        //      Enter new lines after last else if
        //      Example: 
        //
        //      ...
        //      } else if (query.indexOf("command") != -1 || query.indexOf("command kommand") != -1) {
        //          clearall();
        //          CommandToggle = 1;
        //          document.getElementById("iconID").style.display = "inline-block";
        //          document.getElementById("controls").style.width = "60px";
        //      } else { ...

        if (keyword.indexOf("download") != -1 || keyword.indexOf("get") != -1) {
            clearall();
            DownloadToggle = 1;
            document.getElementById("dl").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("gcl") != -1) {
            document.getElementById("gcl").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("find") != -1 || (two_keywords.indexOf("look for") != -1) || (two_keywords.indexOf("search for") != -1)) {
            clearall();
            FindToggle = 1;
            document.getElementById("sb").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("tweet") != -1) {
            clearall();
            TweetToggle = 1;
            document.getElementById("tweet").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("post:") != -1) {
            clearall();
            PostToggle = 1;
            document.getElementById("fbpost").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("play") != -1) {
            clearall();
            PlayToggle = 1;
            document.getElementById("play").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("define") != -1 || two_keywords.indexOf("what does") != -1 && keyword.indexOf("mean") != -1) {
            clearall();
            DefineToggle = 1;
            document.getElementById("df").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("what") != -1 || keyword.indexOf("who") != -1 || keyword.indexOf("when") != -1 || keyword.indexOf("where") != -1 || keyword.indexOf("how") != -1) {
            clearall();
            qToggle = 1;
            document.getElementById("q").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (two_keywords.indexOf("go to") != -1 || keyword.indexOf("open") != -1 || two_keywords.indexOf("navigate to") != -1) {
            clearall();
            NavToggle = 1;
            document.getElementById("nav").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("translate") != -1) {
            clearall();
            NavToggle = 1;
            document.getElementById("trans").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("gcl: refresh") != -1 || keyword.indexOf("gcl: fix") != -1) {
            load();
            clearall();
            window.location.assign("/grapplr.php");
        } else if (keyword.indexOf("calculate") != -1) {
            clearall();
            CalcToggle = 1;
            document.getElementById("calc").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (keyword.indexOf("plot") != -1) {
            clearall();
            CalcToggle = 1;
            document.getElementById("plot").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (two_keywords.indexOf("remind me") != -1) {
            clearall();
            RemindToggle = 1;
            document.getElementById("remind").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else {
            clearall();
        }
        console.log(DownloadToggle, FindToggle, PlayToggle, TweetToggle, PostToggle, DefineToggle, qToggle);
    }
}

//Stop

function load() {
    clearall();
    //    document.getElementById("speech").style.display = "none";
    document.getElementById("query").style.display = "none";
    document.getElementById("load").style.display = "inline-block";
}

function unload() {
    clearall();
    //    document.getElementById("speech").style.display = "inline";
    document.getElementById("query").style.display = "inline";
    document.getElementById("load").style.display = "none";
}

function getKeywords() {
    var queryWords = query.split(" ");
    var keyword = query.split(" ", 2)[0];
    var two_keywords = queryWords[0] + " " + queryWords[1];
    var three_keywords = queryWords[0] + " " + queryWords[1] + " " + queryWords[2];
}
document.getElementById("overlay").onmousemove = function(e) {
    document.getElementById("bigclock").style.opacity = "0";
    document.getElementById("bigclock").style.top = "45%";
    document.getElementById("centerMain").style.opacity = "1";
    document.getElementById("centerMain").style.top = "45%";
    var opacity = localStorage.getItem('opacityVal');
    document.getElementById("dots").style.opacity = opacity;
}
function clearall() {
    DownloadToggle = 0;
    FindToggle = 0;
    PlayToggle = 0;
    TweetToggle = 0;
    PostToggle = 0;
    DefineToggle = 0;
    qToggle = 0;
    UploadToggle = 0;
    TransToggle = 0;
    CalcToggle = 0;
    PlotToggle = 0;
    RemindToggle = 0;
    //  Step 4:
    //  Set function toggle to off here
    //  Example:
    //  CommandToggle = 0;

    document.getElementById("gcl").style.display = "none";
    document.getElementById("controls").style.width = "0px";
    document.getElementById("sb").style.display = "none";
    document.getElementById("play").style.display = "none";
    document.getElementById("tweet").style.display = "none";
    document.getElementById("fbpost").style.display = "none";
    document.getElementById("dl").style.display = "none";
    document.getElementById("df").style.display = "none";
    document.getElementById("q").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("trans").style.display = "none";
    document.getElementById("calc").style.display = "none";
    document.getElementById("plot").style.display = "none";
    document.getElementById("remind").style.display = "none";

    //  Step 5 (last step on this file):
    //  Make command icon disappear here
    //  Example:
    //  document.getElementById("iconID").style.display = "none";

}
document.getElementById('apps').onclick = function() {
    chrome.tabs.update({
        url: 'chrome://apps/'
    });
}
$(document).ready(function() {
    var idleTime = 0;

    setInterval(timerIncrement, 59999);
    document.onmousemove = function() {
        idleTime = 0;
    }
    document.onkeydown = function() {
        idleTime = 0;
    }

    function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 0) {
            document.getElementById("overlay").style.visibility = "visible";
            document.getElementById("bigclock").style.opacity = 1;
            document.getElementById("bigclock").style.top = "50%";
            document.getElementById("centerMain").style.opacity = 0;
            document.getElementById("centerMain").style.top = "50%";
        }
        if (idleTime > 1) {
            document.getElementById("dots").style.opacity = ".9";
        }
    }

    startTime();
    loadConfig();
//    document.getElementById("greeting").innerHTML = "loading...";
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var date = today.toDateString();
        h = checkHours(h);
        m = checkMinutes(m);
        document.getElementById('clock').innerHTML = date + " <b>" + h + ":" + m + " " + tod + "</b>";
        document.getElementById('bigclock').innerHTML = h + ":" + m;
        h = setGreeting(h);
        setTimeout(function() {
            startTime();
        }, 20000);
    }

    function checkMinutes(i) {
        if (i < 10) {
            i = "0" + i
        };
        return i;
    }

    function checkHours(i) {
        if (i >= 12) {
            if (i == 12) {
                i = 12;
                tod = "PM";
            } else {
                i = i - 12;
                tod = "PM";
            }
        }
        return i;
    }

    function setGreeting(i) {
        var infos = JSON.parse(localStorage.getItem('infoStorage'));
        var name = infos[0];
        if (tod == "PM") {
            if (i == 12) {
                document.getElementById("greeting").innerHTML = "Grab a bite!";
            } else if (i > 4) {
                document.getElementById("greeting").innerHTML = "Good evening, " + name + ".";
            } else {
                document.getElementById("greeting").innerHTML = "Good afternoon, " + name + ".";
            }
        } else {
            document.getElementById("greeting").innerHTML = "Good morning, " + name + ".";
        }
        return i;
    }
    $("#query").focus();
    var e = $.Event("keydown", {
        keyCode: 9
    }); //"keydown" if that's what you're doing
    $("html").trigger(e);
});