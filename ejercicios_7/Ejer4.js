var arr=[2,5,7,2,3,8,10];

document.getElementById("a").innerHTML=arr.map(function(i){
  return i*2+1;
});
