var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 260 ) {   
        $('#dltop').css({
            display:"inline",
        });
        $('#dlbottom').css({
            display:"none",
        });
    } else {
     $('#dltop').css({
            display:"none",
        });
        $('#dlbottom').css({
            display:"inline",
        });
    }
});
var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 518 ) {   
        $('#nav_bar').css({
            "box-shadow":'0px 0px 30px -10px #000'
        });
    } else {
     $('#nav_bar').css({
            "box-shadow":'0px 0px 0px -10px #000'
        });
    }
});