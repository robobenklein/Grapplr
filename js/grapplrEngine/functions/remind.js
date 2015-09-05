var reminders;
window.onload = function() {
    var reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
    console.log("1" + reminders);
    if (reminders == undefined){
    } else {
        document.getElementById("center_tools").style.marginTop = "-10px";
        populateList(reminders);
    }
}
function populateList(r){
    document.getElementById("center_reminder").innerHTML = r;
    return r;
}

function remind(){
    unload();
    var request = document.getElementById("query").value;
    var reminder;
    var reminders = [];
    document.getElementById("center_reminder").style.display = "inline";
    document.getElementById("query").value = "";
    if (request.indexOf("remind me to") != -1){
        reminder = request.match("remind me to(.*)")[1];
        reminder = reminder.replace(/ me /," you ");
        reminder = reminder.replace(/ my /," your ");
        reminder = reminder.replace(/ i /," you ");
        reminder = reminder.replace(/ am /," are ");
        reminder = reminder.replace(/ i'm /," you're ");
        reminder = reminder + " ";
//      thirdPerson(reminder);
        var task = "<div id='reminder'> remember to " + reminder + "</div>";
        document.getElementById("center_reminder").innerHTML = task;
    }
    if (request.indexOf("remind me that") != -1){
        reminder = request.match("remind me that(.*)")[1];
        reminder = reminder.replace(/ me /," you ");
        reminder = reminder.replace(/ my /," your ");
        reminder = reminder.replace(/ i /," you ");
        reminder = reminder.replace(/ am /," are ");
        reminder = reminder.replace(/ i'm /," you're ");
        reminder = reminder + " ";
//      thirdPerson(reminder);
        var task = "<div id='reminder'> remember that " + reminder + "</div>";
        document.getElementById("center_reminder").innerHTML = task;
        
    }
    document.getElementById("center_tools").style.marginTop = "-10px";
    clearall();
    document.getElementById("controls").style.width = "0px";
    document.getElementById("remind").style.display = "none";
    
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
function redisplay() {
    reminders = JSON.parse(localStorage.getItem('remindersLocal'))[0];
    document.getElementById("center_reminder").innerHTML = reminders;
}
//function thirdPerson (w){
//        w = w.replace(/ me | me/," you ");
//        w = w.replace(/ my | my/," your ");
//        w = w.replace(/ i | i/," you ");
//        return w;
//}
    