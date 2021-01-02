$(document).ready(function(){
    $("#btn1" ).click(function() {     
        $('.menu').toggle();
    });
});
$(window).resize(function() {
    if( $(window).width() > 840 ) {
        $('.menu').show();   
    }
    if( $(window).width() < 840 ) {
        $('.menu').hide();   
    }
});