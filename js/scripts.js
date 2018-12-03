
function triangle(){
var a = parseInt(document.getElementById("side1").value);
var b = parseInt(document.getElementById("side2").value);
var c = parseInt(document.getElementById("side3").value);

if(a===c && a===b && b===c){
  alert("equilateral");
}else if(a==b || a==c || b==c) {
  alert("isoceles");
}else if((a+b)>=c && (b+c)>=a || (a+c)>=b) {
  alert("Scalene");
}else {
  alert("Not A Triangle");
}
}
