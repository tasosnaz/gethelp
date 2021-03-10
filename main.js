$(document).ready(function() {
    $(".burger").on('click', function() {
        $("#main-menu").show();
        $(".burger").hide();
    });


    $("#close-btn").on('click', function() {
        $("#main-menu").hide();
        $(".burger").show();
    });

});

$(document).ready(function() {
    $("#down").click(function() {
        $("#btn-dropdown").toggle();
    });


    $(".return").click(function() {
        $("#btn-dropdown ul").hide();
    });

});  


$(window).resize(function() {
    if ($(window).width() > 930) {
        $("#main-menu").css('display','flex');
    
    };
})

$(window).resize(function() {
    if ($(window).width() < 960) {
        $("#main-menu").css('display','block').hide();
    };
})