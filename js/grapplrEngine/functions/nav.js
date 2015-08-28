function nav() {
    var query = document.getElementById("query").value;
    var site = query.match("navigate to (.*)") || query.match("go to (.*)") || query.match("open (.*)");
    var wordCount = site[1];
    var wordCount = wordCount.replace(/(^\s*)|(\s*$)/gi,"");
    var wordCount = wordCount.replace(/[ ]{2,}/gi," ");
    var wordCount = wordCount.replace(/\n /,"\n");
    var wordCount = wordCount.split(' ').length;
    var site = site[1].replace(/ /g,'');
    if (site.indexOf(".") != -1){
        var url = ("http://" + site);
        window.location.assign(url);
    } else {
        var url = ("http://" + site + ".com");
        window.location.assign(url);
    }
}