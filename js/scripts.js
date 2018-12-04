
function triangle(){
var a = parseInt(document.getElementById("sidea").value);
var b = parseInt(document.getElementById("sideb").value);
var c = parseInt(document.getElementById("sidec").value);

if(a===c && a===b && b===c){
  alert("equilateral");
}else if(a==b || a==c || b==c) {
  alert("isoceles");
}else if((a+b)>=c && (b+c)>=a || (a+c)>=b)  {
  alert("Scalene");
}else if((a+b)<=c || (a+c)<=b || (b+c)<=a) {
  alert("Not A Triangle");
}
}
