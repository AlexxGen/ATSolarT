// Nav bar text animation
$("nav a").mouseover(function(){
    $(this).addClass("navAHover");
});

$("nav a").mouseout(function(){
    $(this).removeClass("navAHover");
});

//New Header on scroll
window.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        $(".headScroll").removeClass("inactive");
    }else{
        $(".headScroll").addClass("inactive");
    }    
})

// Change image on mouse hover
$(".imgStack").mouseover(function(){
    $(this).find(".layer0").addClass("transparent");
    $(this).find(".layer1").removeClass("transparent");
});

$(".imgStack").mouseout(function(){
    $(this).find(".layer0").removeClass("transparent");
    $(this).find(".layer1").addClass("transparent");
});