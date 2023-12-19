$("button").click(function() {
let food = $(".place").val();
$(".vote-result").text(food);
 $("img").show();
    console.log(food);
    
let food2 = $(".place2").val();
$(".vote-result").text("Your favorite food is "+ food +" and your favorite snack "+ food2);
 $("img").show();
    console.log( food + food2);
    
});


$("button").click(function() {
alert("thanks for voting");
}); 


