document.getElementById("add_todo").onclick = function(){
    addToDo();
}
document.getElementById("x_todo").onclick = function(){
    closeToDo();
}
document.getElementById("open_todo").onclick = function(){
    openToDo();
}
// CRAP AND CRAP AND CRAP AND CRAPP
function addToDo(data){
    var tasks = [];
    var taskName = document.getElementById('task').value;
    taskName = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(data);
    alert(taskName);
    localStorage.setItem('tasks', JSON.stringify(taskName));
}
function openToDo(){
    document.getElementById("task_add").style.visibility = "visible";
    document.getElementById("task_add").style.height = "50px";
    document.getElementById("open_todo").style.display = "none";
    document.getElementById("add_todo").style.visibility = "hidden";
}
function closeToDo(){
    document.getElementById("task_add").style.visibility = "hidden";
    document.getElementById("task_add").style.height = "0px";
    document.getElementById("open_todo").style.display = "inline";
    document.getElementById("add_todo").style.visibility = "hidden";
}
var menuToggle = 0;
document.getElementById("todo_toggle").onclick = function (){
    if (menuToggle == 0){
        menuToggle = 1;
//        document.getElementById("todo").style.display = "inline-block";
        document.getElementById("todo").style.opacity = "1";
        document.getElementById("todo").style.bottom = "50";
    } else {
        menuToggle = 0;
//        document.getElementById("todo").style.display = "none";
        document.getElementById("todo").style.opacity = "0";
        document.getElementById("todo").style.bottom = "30";
    }
}
document.getElementById("task").onkeyup = function(){
    var taskName = document.getElementById("task").value;
    if (taskName.length > 0){
        document.getElementById("add_todo").style.visibility = "visible";
        document.getElementById("x_todo").style.visibility = "hidden";
    } else {
        document.getElementById("add_todo").style.visibility = "hidden";
        document.getElementById("x_todo").style.visibility = "visible";
    }
}