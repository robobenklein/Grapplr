function tweet() {
    var query = document.getElementById("query").value;
    var tweet = query.match("tweet (.*)");
    var url = ('https://twitter.com/intent/tweet?text=' + tweet[1]);
    window.open(url,'Tweet','height=254,width=600,resizable=no,scrollbars=no,status=no');
}