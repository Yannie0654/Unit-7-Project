$(".submit").click(function() {
    let name = $(".name").val();
    let year = $(".year-start").val();
    let times = $(".times").val();
    $("h4").append(name+" will eat "+(2050-year)*times*12+" times sushi at 2050.");
    $("img").show();
$(".web").hover(function() {
    $(".web").css("border", "solid skyblue 5px");
});
    
    //let see what's in our variable faveColor using the console!
    console.log(name);
    console.log(year);
    console.log(times);

    console.log("in the submit handler!");
});