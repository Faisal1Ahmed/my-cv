$("button").on("click",function(){
    $("h1").animate({opacity:0.6});
})
$("input").on("keypress",function(event){
    $("h1").html(event.key);
})
$("h1").append("<button>black</button>" )