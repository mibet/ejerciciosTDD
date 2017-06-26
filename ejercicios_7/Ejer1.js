var arr=[4,4,5,12];
var num= 9;
//var ok=res*num;
arr.push(num);
document.getElementById("hola").innerHTML=arr.reduce(function(valorAnt,valorAct,indice, vector){
  var res= valorAnt * valorAct;
  return res;
});
