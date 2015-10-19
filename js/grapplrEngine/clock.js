function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var date = today.toDateString();
    h = setGreeting(h);
    h = checkHours(h);
    m = checkMinutes(m);
    document.getElementById('clock').innerHTML = date + " <b>" + h + ":" + m + " " + tod + "</b>";
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
    var militaryTime = localStorage.getItem('mTime');
    if(militaryTime == 1){
        $("#tfhr").prop('checked', true);
        tod = "";
        return i;
    } else {
    if (i >= 12) {
        if (i == 12) {
            i = 12;
            tod = "PM";
        } else {
            i = i - 12;
            tod = "PM";
        }
    }
    if (i == 0) {
        i = 12;
        tod = "AM";
    }
    return i;
    }
}

function setGreeting(i) {
    var name = localStorage.getItem('name');
        if (i > 17) {
            document.getElementById("greeting").innerHTML = "Good evening, " + name + ".";
        } else if (i > 11) {
            document.getElementById("greeting").innerHTML = "Good afternoon, " + name + ".";
        } else if (i > 3){
            document.getElementById("greeting").innerHTML = "Good morning, " + name + "!";
        } else {
            document.getElementById("greeting").innerHTML = "Good evening, " + name + ".";
        }
    return i;
}
$("#tfhr").change(function(){
    if(this.checked){
        localStorage.setItem("mTime", "1");
        startTime();
    } else {
        localStorage.setItem("mTime", "0");
        startTime();
    }
});
$(document).ready(function() {
    var idleTime = 0;
    setInterval(timerIncrement, 5000);
    document.onmousemove = function() {
        showUI();
        idleTime = 0;
    }
    document.onkeydown = function() {
        showUI();
        idleTime = 0;
    }

    function timerIncrement() {
        idleTime = idleTime + 1;
        console.log(idleTime);
        if (idleTime > 5) {
            showClock();
        } 
        if (idleTime > 11) {
            document.getElementById("dots").style.opacity = ".97";
        }
    }
    });