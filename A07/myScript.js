/**
 * Created by JAIMARJOHN on 9/18/2015.
 */

var element = document.getElementById("menu1");
var classArray = getClasses(element);


function getClasses(element){
  var x = element.className;
  var y = x.split(" ");

  return y;

}


function addClass(element, classN){
  element.className += classN;
}


addClass(element, "newCLass");



