function persona(nombre,dia,mes,anio){
  this.nombre=nombre;
  this.dia=dia;
  this.mes=mes;
  this.anio=anio;
  this.edad = function(){
    return "La edad actual de "+ this.nombre +" es: "+ (2017 - this.anio);
  };
}

var Maria= new persona("Maria",10,8,1991);

var Mario= new persona("Mario",10,8,1993);

console.log(Maria.edad());
console.log(Mario.edad());
