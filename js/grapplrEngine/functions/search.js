function search() {
    load();
    var query = document.getElementById("query").value;
    if (query.indexOf("look for") != -1 || query.indexOf("search for") != -1 || query.indexOf("find") != -1) {
        if (query.indexOf(" on ") != -1) {
                var term = query.match("find (.*)on") || query.match("look for (.*)on") || query.match("search for (.*)on");
                var engine = query.match(" on (.*)");
                if (engine[1].indexOf(".") != -1) {
                    var url = ('http://' + engine[1] + "/search?q=" + term[1]);
                    window.location.assign(url);
                } else {
                    var url = ('http://' + engine[1] + ".com/search?q=" + term[1]);
                    window.location.assign(url);
                }
            } else {
                var engine = "http://google.com/search?q=";
                var term = query.match("find (.*)") || query.match("look for (.*)") || query.match("search for (.*)");
                var url = (engine + term[1]);
                window.location.assign(url);
            }
        } else {
            wordCount = document.getElementById("query").value;
            wordCount = wordCount.replace(/(^\s*)|(\s*$)/gi,"");
            wordCount = wordCount.replace(/[ ]{2,}/gi," ");
            wordCount = wordCount.replace(/\n /,"\n");
            wordCount = wordCount.split(' ').length;
            if (wordCount > 1){
                var engine = "http://google.com/search?q=";
                var url = (engine + query);
                window.location.assign(url);
            } else if (query.indexOf(".") != -1){
                var url = ("http://" + query);
                window.location.assign(url);
            } else {
                if (wordCount > 1){
                    var engine = "http://google.com/search?q=";
                    var url = (engine + query);
                    window.location.assign(url);
                } else {
                    var engine = "http://google.com/search?q=";
                    var url = (engine + query);
                    window.location.assign(url);
                }
            }
        }
    }

