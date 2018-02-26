startTime();
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkHours(h);
    m = checkMinutes(m);
    document.getElementById('clock').innerHTML = h + ":" + m;
    setTimeout(function() {
        startTime();
    }, 30000);
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
        tod = "";
        return i;
    } else {
    if (i >= 12) {
        if (i == 12) {
            i = 12;
            tod = "PM";
        } else {
            i = i - 12;
        }
    }
    if (i == 0) {
        i = 12;
    }
    return i;
    }
}