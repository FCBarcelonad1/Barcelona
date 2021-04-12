var pressed=0;

$(".arrow").click(function (e) { 
    
    if(pressed == 0)
    {
        $(".cups").slideDown();
        $(".cups").removeClass("invizibil");
        
        pressed=1;
    }
    else
    {
        $(".cups").slideUp();
        $(".cups").addClass("invizibil");
        pressed=0;
    }
});