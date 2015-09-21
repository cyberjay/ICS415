
/**
 * Created by JAIMARJOHN on 9/14/2015.
 */


$(document).ready(function(){
  $(".one").click(function(){
    alert("Hi");
    $(".one").css({"font-size":"100px", "color":"red"});
  });

  $(".two").mouseenter(function(){
    $(".two").css({"background-color":"black", "color":"white", "border":"solid 1px"});
  });

  $(".three").mouseleave(function(){
    $(".three").text("THANK YOU!");
  });
});