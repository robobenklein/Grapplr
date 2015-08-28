$(function(){
    $('#search').hide();

});

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 518 ) {   
        $('#nav_bar').css({
            "border-bottom":"1px solid #aaa",
            "backgroundColor":'#ededed',
        });
    } else {
     $('#nav_bar').css({
            "border-bottom":"1px solid #ededed"
        });
    }
});