
function rectangulo(base, altura){
  this.base=base;
  this.altura=altura;
}

var miRectangulo = new rectangulo(5,4);
console.log(miRectangulo);
var area=miRectangulo.base * miRectangulo.altura;
console.log("El area del rectangulo es: "+area);
