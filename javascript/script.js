$(document).ready(function () {



    // event handler for when the user scrolls the browser window
$(window).scroll(function () {
    
    if ($(this).scrollTop() > 0) {
        $("#backToTop").show();
    }
    else {
        $("#backToTop").hide();
    }
});

$("#backToTop").click(function () {
    $(window).scrollTop(0);
        
    return false;
});


});