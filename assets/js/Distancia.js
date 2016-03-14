(function(exports){
    "use strict";
    
    function Distancia(){
        Medida.call(this,valor,tipo);
    }
    
    Distancia.prototype = Object.create(Medida.prototype);
    Distancia.prototype.constructor= Distancia;
  
    
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
   
   Medida.measures = {
      "km" : Kilometros,
      "mi" : Millas
    };

    exports.Kilometros = Kilometros;
    exports.Millas = Millas;
    
})(this);