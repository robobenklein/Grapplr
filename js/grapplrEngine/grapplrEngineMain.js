//Grapplr Engine
//(c) 2015 Preston Gull
//
//License:
//1. This code may be modified, but all sections of commented code must be left intact.
//2. You may not redistribute this code in its entirety, but you may redistribute your section of modified code.

var query = document.getElementById("query").value;

//Custom Command Step 1:
//Define Function Toggle

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

document.onkeyup = function(event) {
    var query = document.getElementById("query").value;

    if (event.keyCode == 32) {
        speak();
    } else {
        $('#query').focus();
        
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
            } else {
                search();
                console.log("searching");
            }
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
        
        if (query.indexOf("download") != -1 || query.indexOf("get") != -1) {
            clearall();
            DownloadToggle = 1;
            document.getElementById("dl").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("gcl") != -1) {
            document.getElementById("gcl").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        }
        else if (query.indexOf("find") != -1 || (query.indexOf("look for") != -1) || (query.indexOf("search for") != -1)) {
            clearall();
            FindToggle = 1;
            document.getElementById("sb").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("tweet") != -1) {
            clearall();
            TweetToggle = 1;
            document.getElementById("tweet").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("post:") != -1) {
            clearall();
            PostToggle = 1;
            document.getElementById("fbpost").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("play") != -1) {
            clearall();
            PlayToggle = 1;
            document.getElementById("play").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("define") != -1 || query.indexOf("what does") != -1 && query.indexOf("mean") != -1) {
            clearall();
            DefineToggle = 1;
            document.getElementById("df").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("what") != -1 || query.indexOf("who") != -1 || query.indexOf("when") != -1 || query.indexOf("where") != -1 || query.indexOf("how") != -1) {
            clearall();
            qToggle = 1;
            document.getElementById("q").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("go to") != -1 || query.indexOf("open") != -1 || query.indexOf("navigate to") != -1) {
            clearall();
            NavToggle = 1;
            document.getElementById("nav").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("translate") != -1) {
            clearall();
            NavToggle = 1;
            document.getElementById("trans").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("gcl: refresh") != -1 || query.indexOf("gcl: fix") != -1) {
            load();
            clearall();
            window.location.assign("/grapplr.php");
        } else if (query.indexOf("calculate") != -1) {
            clearall();
            CalcToggle = 1;
            document.getElementById("calc").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else if (query.indexOf("plot") != -1) {
            clearall();
            CalcToggle = 1;
            document.getElementById("plot").style.display = "inline-block";
            document.getElementById("controls").style.width = "60px";
        } else {
            clearall();
        }
        console.log(DownloadToggle, FindToggle, PlayToggle, TweetToggle, PostToggle, DefineToggle, qToggle);
    }
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
    
//  Step:
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
    
//  Step 5 (last step on this file):
//  Make command icon disappear here
//  Example:
//  document.getElementById("iconID").style.display = "none";
    
}

//Stop

function load() {
    clearall();
    document.getElementById("speech").style.display = "none";
    document.getElementById("query").style.display = "none";
    document.getElementById("load").style.display = "inline-block";
}
function unload() {
    clearall();
    document.getElementById("speech").style.display = "inline";
    document.getElementById("query").style.display = "inline";
    document.getElementById("load").style.display = "none";
}
if (annyang) {
    var changeText = function(stuff) {
        if (stuff.toLowerCase().match(/(clear\s(the)?\stext(\s)?(area|box)|(clear|delete)\severything)/g)) {
            document.getElementById("query").value = "";
        }
        document.getElementById("query").value += stuff;
    }
    var commands = {
        "*stuff": changeText
    }
    annyang.addCommands(commands);
}