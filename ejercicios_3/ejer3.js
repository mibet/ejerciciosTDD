function persona(nombre,edad, pasatiempo){
  //atributos
  this.nombre=nombre;
  this.edad=edad;
  this.pasatiempo=pasatiempo;

  //metodo
  this.habla= function(){
    return "hola soy "+this.nombre+" tengo "+this.edad+" años y me gusta "+this.pasatiempo
  };
}

var p1= new persona("Amalia", 18, "jugar");

console.log(p1.habla());
