function download() {
    var query = document.getElementById("query").value;
    window.location.assign("http://www.google.com/search?q=" + query + "&btnI=Im+Feeling+Lucky");
}