$(function() {
    $('#nav-wrapper').height($("#nav").height());
    
    $('#nav').affix({
        offset: { top: $('#nav').offset().top }
    });
});

$(function(){
    $("button").click(function(){
        $("#nav").toggleClass("nav-bkg-white");
    });
});
