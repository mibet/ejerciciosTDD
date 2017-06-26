var arr=[784123123,355676784,342354355];
var n=784;

document.getElementById("demo").innerHTML=arr.filter( function igual(val){
  var val= val.toString();
  var num=n;
  if((val.substr(0,3)==num) || (val.substr(-3)==num))
    {
      return true;
    }
});
