var reminders;
    var reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
    console.log("1" + reminders);
    if (reminders == undefined){
    } else {
        document.getElementById("center_tools").style.marginTop = "-10px";
        populateList(reminders);
    }
function populateList(r){
    document.getElementById("center_reminder").innerHTML = "<div id='reminder'>" + r + "</div>";
    return r;
}

function remind(){
    unload();
    var request = document.getElementById("query").value;
    var reminder;
    var reminders = [];
    document.getElementById("center_reminder").style.visibility = "visible";
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
    if (reminders.length > 1){
        setTimeout(redisplay, 2500);
    }
}
document.getElementById("center_reminder").onclick = function(){
    reminders = JSON.parse(localStorage.getItem('remindersLocal'));
    if (reminders.length >= 1){
        var remCollapse = document.getElementById('AllReminders').clientHeight;
        document.getElementById("AllReminders").style.top = "-" + remCollapse;
        document.getElementById("overlay").style.visibility = "hidden";
        reminders.splice(0,1);
        localStorage.setItem('remindersLocal', JSON.stringify(reminders));
        document.getElementById("center_reminder").innerHTML = '<div id="reminder"></div>';
        reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
        populateList(reminders);
    }
    if (reminders == undefined){
        var remCollapse = document.getElementById('AllReminders').clientHeight;
        document.getElementById("AllReminders").style.top = "-" + remCollapse;
        document.getElementById("overlay").style.visibility = "hidden";
        document.getElementById("center_reminder").style.visibility = "hidden";
        document.getElementById("center_tools").style.marginTop = "0px";
    }
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
    }
}
document.getElementById("AllReminders").onmouseover = function(){
    document.getElementById("AllReminders").style.top = "0";
    document.getElementById("overlay").style.visibility = "visible";
}
document.getElementById("center_reminder").onmouseleave = function(){
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
}
document.getElementById("AllReminders").onmouseleave = function (){
    var remCollapse = document.getElementById('AllReminders').clientHeight;
    document.getElementById("AllReminders").style.top = "-" + remCollapse;
    document.getElementById("overlay").style.visibility = "hidden";
}
    