function triangle(){
var A = parseInt(prompt("input sideA:"));
var B = parseInt(prompt("input sideB:"));
var C = parseInt(prompt("input sideC:"));

if(A===B && A===C && B===C){
  alert("equilateral");
}else if(A===B || A===C || B===C){
  alert("isoceles");
}else if((A+B)>=C && (B+C)>=A || (A+C)>=B){
  alert("Scalene");
}else if((A+B)<= C || (A+C)<=B || (B+C)<=A);{
  alert("Not A Triangle");
}
}
triangle();
