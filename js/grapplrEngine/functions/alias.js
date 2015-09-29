$(document).ready(function() {
    var currentUrl
    document.onkeyup = function(event){
        if(event.keyCode == 38){
            var currentUrl = { active: true, currentWindow: true };
            alert(currentUrl);
            var alias = document.getElementById("aliasInput").value;
//            addAlias(alias,value);
//            writeAlias(alias);
        }
    }
    function callback(tabs) {
      var currentTab = tabs[0];
      console.log(currentTab);
    }
    function addAlias(){
        var alias_ra = [];
        alias_ra["preston's site"]	 	= "http://prestongull.gq";

        function getAlias(term){
            return alias_ra[term];
        }

        function writeAlias(term){
           document.getElementById("output").innerHTML += (getAlias(term) + "<br>");
        }

        function addAlias(alias, value){
           alias_ra[alias] = value;
        }
    }
});