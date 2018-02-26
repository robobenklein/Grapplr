function calculate(){
    load();
    var query = document.getElementById("query").value;
    var equation = query.match("calculate (.*)");
    var answer = eval(equation[1]);
    clearall();
    unload();
    document.getElementById("query").value = answer;
    $('#query').focus();
}
function plot(){
    
}
function algebraCalculate(){
    
}