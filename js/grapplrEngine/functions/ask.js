function ask() {
    var query = document.getElementById("query").value;
    if (query.indexOf("how are you") != -1 || query.indexOf("what's up") != -1) {
        document.getElementById("query").value = "Grapplr can't talk to you. But it can help find answers to other questions!";
    } else if (query.indexOf("what is my name") != -1 || query.indexOf("who am i") != -1 || query.indexOf("what's my name") != -1 || query.indexOf("what is my last name") != -1) {
        document.getElementById("query").value = "You should already know that";
    } else if (query.indexOf("who are you") != -1 || query.indexOf("what are you") != -1 || query.indexOf("what is your name") != -1 || query.indexOf("what's your name") != -1 || query.indexOf("what is this") != -1) {
        document.getElementById("query").value = "This is Grapplr. A text-based web portal written by Preston Gull";
    } else {
        wordCount = document.getElementById("query").value;
        wordCount = wordCount.replace(/(^\s*)|(\s*$)/gi,"");
        wordCount = wordCount.replace(/[ ]{2,}/gi," ");
        wordCount = wordCount.replace(/\n /,"\n");
	    wordCount = wordCount.split(' ').length;
        if (query.indexOf("what") != -1 || query.indexOf("who") != -1) {
            if (query.indexOf("who is") != -1) {
                if(wordCount == 4 || wordCount == 5){
                    load();
                    var person = query.match("who is (.*)");
                    var url = ('https://en.wikipedia.org/wiki/Special:Search/' + person[1]);
                    window.location.assign(url);
                }
            } else if (query.indexOf("who are") != -1) {
                if(wordCount == 4 || wordCount == 5){
                    load();
                    var people = query.match("who are the (.*)");
                    var url = ('https://en.wikipedia.org/wiki/Special:Search/' + people[1]);
                    window.location.assign(url);
                }
            } else {
                load();
                var url = ('http://www.wolframalpha.com/input/?i=' + query);
                window.location.assign(url);
            }
        }
    }
}