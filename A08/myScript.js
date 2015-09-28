/**
 * Created by JAIMARJOHN on 9/23/2015.
 */

$(document).ready(function() {
  $(".aone").hide();
  $(".atwo").hide();
  $(".athree").hide();
  $(".afour").hide();
  $(".afive").hide();

  $(".qone").click(function() {
    $(".aone").toggle();
  });

  $(".qtwo").click(function() {
    $(".atwo").toggle();
  });

  $(".qthree").click(function() {
    $(".athree").toggle();
  });

  $(".qfour").click(function() {
    $(".afour").toggle();
  });

  $(".qfive").click(function() {
    $(".afive").toggle();
  });



  $(".button").click(function(){
    var x = document.getElementById("url").value;
    $.ajax({
      url : x,
      success : function (data) {
        var i = $(data).find('a').length;
        $(".answer").text("Number of links on page: " + i);
      }
    });
  });



});

