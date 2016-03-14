(function(exports){
    "use strict";
    
    function Distancia(){
        Medida.call(this,valor,tipo);
    }
    
    Distancia.prototype = Object.create(Medida.prototype);
    Distancia.prototype.constructor= Distancia;
  
 /*   
    Kilometros.prototype = Object.create(Distancia.prototype);
    Kilometros.prototype.constructor = Kilometros;
   
  
    function Kilometros(valor) {
      Distancia.call(this, valor, "km");
      this.name = "Kilometros";
    }
    
    Kilometros.prototype.toMillas = function () {
      var converted = (this.getValor()* 0.6213);
      return converted;
    }
    
    
    Millas.prototype = Object.create(Distancia.prototype);
    Millas.prototype.constructor = Millas;
   
  
    function Millas(valor) {
      Distancia.call(this, valor, "mi");
      this.name = "Kilometros";
    }
    
    Millas.prototype.toKilometros = function () {
      var converted = (this.getValor()* 1.6);
      return converted;
    }
 */  
   
    Metros.prototype = Object.create(Distancia.prototype);
    Metros.prototype.constructor = Metros;
   
  
    function Metros(valor) {
      Distancia.call(this, valor, "m");
      this.name = "Metros";
    }
    
    Metros.prototype.toPulgadas = function () {
      var converted = (this.getValor() *39.3701);
      return converted;
    }
    
    
    Pulgadas.prototype = Object.create(Distancia.prototype);
    Pulgadas.prototype.constructor = Pulgadas;
   
  
    function Pulgadas(valor) {
      Distancia.call(this, valor, "p");
      this.name = "Pulgadas";
    }
    
    Pulgadas.prototype.toMetros = function () {
      var converted = (this.getValor()* 0.0254);
      return converted;
    }
   
   
   Medida.measures = {
     // "km" : Kilometros,
     // "mi" : Millas,
      "m" : Metros,
      "p" : Pulgadas
    };

    //exports.Kilometros = Kilometros;
    //exports.Millas = Millas;
    exports.Metros = Metros;
    exports.Pulgadas = Pulgadas;
    
    
})(this);