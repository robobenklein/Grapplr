function define() {
    var query = document.getElementById("query").value;
    var term = query.match("define (.*)");
    var url = ('http://dictionary.reference.com/browse/' + term[1]);
    window.location.assign(url);
}