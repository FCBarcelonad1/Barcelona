var pressed = 0;

$(".arrow").click(function () {

    if (pressed == 0) {
        $(".cups").slideDown();
        $(".cups").removeClass("invizibil");

        pressed = 1;
    } else {
        $(".cups").slideUp();
        $(".cups").addClass("invizibil");
        pressed = 0;
    }
});

var pressed1 = 0;

$(".info").click(function () {

    if (pressed1 == 0) {
        $(".infoContact").slideDown();
        $(".infoContact").removeClass("invizibil");
        setTimeout(function(){
            window.scrollBy(0, 1000);
        }, 350); 

        pressed1 = 1;
    } else {
        $(".infoContact").slideUp();
        $(".infoContact").addClass("invizibil");
        pressed1 = 0;
    }
});

