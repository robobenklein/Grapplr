//  i = 0; i < cars.length; i++
var reminders;
var all_reminders = JSON.parse(localStorage.getItem('remindersLocal'));
var reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
if (reminders == undefined){
} else {
    document.getElementById("center_tools").style.marginTop = "-10px";
    populateList(reminders);
    poplulateAll(all_reminders);
}
function populateList(r){
    document.getElementById("center_reminder").innerHTML = "<div id='reminder'>" + r + "</div>";
    return r;
}
function poplulateAll(ar){
    var i;
    for (i = 0; i < ar.length; i++) {
        document.getElementById("list").innerHTML += "<div value='"+ i + "' name='reminder' class='reminder'>" + ar[i] + "</div>";
    }
    var reminders = document.getElementsByName('reminder');
    for (var i = 0; i < reminders.length; i++) {
        reminders[i].addEventListener('click',eraseReminder);
    }
}
function repopulateAll(){
    document.getElementById('viewall').style.opacity = "0";
    document.getElementById("list").innerHTML = "";
    var all_reminders = JSON.parse(localStorage.getItem('remindersLocal'));
    poplulateAll(all_reminders);
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
}

function remind(){
    unload();
    var request = document.getElementById("query").value;
    var reminder;
    var reminders = [];
    document.getElementById('viewall').style.opacity = "0";
    document.getElementById("query").value = "";
    if (request.indexOf("remind me to") != -1){
        reminder = request.match("remind me to(.*)")[1];
        reminder = reminder + " ";
        reminder = reminder.replace(/ me /," you ");
        reminder = reminder.replace(/ my /," your ");
        reminder = reminder.replace(/ i /," you ");
        reminder = reminder.replace(/ am /," are ");
        reminder = reminder.replace(/ i'm /," you're ");
        reminder = reminder.replace(/ myself /," yourself ");
        var task = "remember to" + reminder;
        document.getElementById("center_reminder").style.display = "block";
        document.getElementById("center_reminder").innerHTML = "<div id='reminder'>" + task + "</div>";
    }
    if (request.indexOf("remind me that") != -1){
        reminder = request.match("remind me that(.*)")[1];
        reminder = reminder + " ";
        reminder = reminder.replace(/ me /," you ");
        reminder = reminder.replace(/ my /," your ");
        reminder = reminder.replace(/ i /," you ");
        reminder = reminder.replace(/ am /," are ");
        reminder = reminder.replace(/ i'm /," you're ");
        reminder = reminder.replace(/ myself /," yourself ");
        var task = "<div id='reminder'> remember that " + reminder + "</div>";
        document.getElementById("center_reminder").style.display = "block";
        document.getElementById("center_reminder").innerHTML = task;
    }
    if (request.indexOf("remind me about") != -1){
        reminder = request.match("remind me about(.*)")[1];
        reminder = reminder + " ";
        reminder = reminder.replace(/ me /," you ");
        reminder = reminder.replace(/ my /," your ");
        reminder = reminder.replace(/ i /," you ");
        reminder = reminder.replace(/ am /," are ");
        reminder = reminder.replace(/ i'm /," you're ");
        reminder = reminder.replace(/ myself /," yourself ");
        reminder = reminder + " ";
        var task = "<div id='reminder'> remember " + reminder + "</div>";
        document.getElementById("center_reminder").style.display = "block";
        document.getElementById("center_reminder").innerHTML = task;
    }
    document.getElementById("center_tools").style.marginTop = "-10px";
    clearall();
    
     if (localStorage.getItem('remindersLocal') === null){
        reminders = [];
    } else {
        reminders = JSON.parse(localStorage.getItem('remindersLocal'));
    }
    reminders.push(task);
    localStorage.setItem('remindersLocal', JSON.stringify(reminders));
    repopulateAll();
    if (reminders.length > 1){
        setTimeout(redisplay, 2500);
    }
}
document.getElementById("center_reminder").onclick = function(){
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
    document.getElementById('center_tools').style.opacity = "1";
    reminders = JSON.parse(localStorage.getItem('remindersLocal'));
    if (reminders.length > 0){
        reminders.splice(0,1);
        localStorage.setItem('remindersLocal', JSON.stringify(reminders));
        document.getElementById("center_reminder").innerHTML = '<div id="reminder"></div>';
        reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
        populateList(reminders);
    } if (reminders == undefined){
        document.getElementById("center_reminder").style.display = "none";
        document.getElementById("center_tools").style.marginTop = "0px";
    }
}
function eraseReminder(){
    var listNum = this.getAttribute("value");
    if (reminders.length > 0){
        reminders.splice(listNum,1);
        this.parentNode.removeChild(this);
        localStorage.setItem('remindersLocal', JSON.stringify(reminders));
        document.getElementById("center_reminder").innerHTML = '<div id="reminder"></div>';
        reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
        repopulateAll();
        populateList(reminders);
    } if (reminders == undefined){
        document.getElementById("center_reminder").style.display = "none";
        document.getElementById("center_tools").style.marginTop = "0px";
    }
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
    document.getElementById('center_tools').style.opacity = "1";
    document.getElementById('viewall').style.opacity = "0";
    redisplay();
}
document.getElementById("center_reminder").onmouseover = function(){
}
function redisplay() {
    reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
    document.getElementById("center_reminder").innerHTML = "<div id='reminder'>" + reminders + "</div>";
}
document.getElementById("center_reminder").onmouseover = function(){
    reminders = JSON.parse(localStorage.getItem('remindersLocal'));
    if (reminders.length >= 2){
        var remCollapse = document.getElementById('AllReminders').clientHeight;
        document.getElementById("AllReminders").style.top = "-" + eval(remCollapse-35);
        document.getElementById('center_tools').style.opacity = "0";
        document.getElementById('viewall').style.opacity = "1";
    }
}
document.getElementById("AllReminders").onmouseover = function(){
    document.getElementById('viewall').style.opacity = "0";
    document.getElementById("AllReminders").style.top = "0";
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById('center_tools').style.opacity = "0";
    document.getElementById('center_reminder').style.opacity = "0";
}
document.getElementById("center_reminder").onmouseleave = function(){
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
    document.getElementById('center_tools').style.opacity = "1";
    document.getElementById('viewall').style.opacity = "0";
}
document.getElementById("AllReminders").onmouseleave = function (){
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse; 
    document.getElementById('center_tools').style.opacity = "1";
    document.getElementById('center_reminder').style.opacity = "1";
}
    