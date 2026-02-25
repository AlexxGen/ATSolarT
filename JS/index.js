// Nav bar text animation
$("nav a").mouseover(function(){
    $(this).addClass("navAHover");
});

$("nav a").mouseout(function(){
    $(this).removeClass("navAHover");
});

// Nav bar text animation
$(".learnMoreBtn a").mouseover(function(){
    $(this).addClass("navAHover");
});

$(".learnMoreBtn a").mouseout(function(){
    $(this).removeClass("navAHover");
});

// //New Header on scroll
// window.addEventListener("scroll", function(){
//     if(window.scrollY > 200){
//         $(".headScroll").removeClass("inactive");
//     }else{
//         $(".headScroll").addClass("inactive");
//     }    
// })