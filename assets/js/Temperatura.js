(function(exports) {
    "use strict";


    function Temperatura(valor,tipo) {
      Medida.call(this, valor, tipo);
    }
    Temperatura.prototype = Object.create(Medida.prototype);
    Temperatura.prototype.constructor = Temperatura;
  
  
  
    /****************METODOS FAHRENHEIT*************************/
    Fahrenheit.prototype = Object.create(Temperatura.prototype);
    Fahrenheit.prototype.constructor = Fahrenheit;
   
  
    function Fahrenheit(valor) {
      Temperatura.call(this, valor, "f");
      this.name = "Fahrenheit";
    }
    
    //fahrenheit to celsius
    Fahrenheit.prototype.toCelsius = function () {
      var converted = (this.getValor() - 32) * 5/9;
      return converted;
    }
    
    //Fahrenheit to kelvin
    Fahrenheit.prototype.toKelvin = function () {
      var converted = ((this.getValor() - 32) / (9/5)) + 273.15;
      return converted;
    }
  

    /********************METODOS CELSIUS********************/
    Celsius.prototype = Object.create(Temperatura.prototype);
    Celsius.prototype.constructor = Celsius;
   
    
    function Celsius(valor) {
      Temperatura.call(this, valor, "c");
      this.name = "Celsius";
    }
    
    //Celsius to fahrenheit
    Celsius.prototype.toFahrenheit = function () {
      var converted = (this.getValor() * 9/5)+32;
      return converted;
    }
    
    //Celsius to Kelvin
    Celsius.prototype.toKelvin = function () {
      var converted = parseFloat(this.getValor()) + 273.15;
      return converted;
    }
   
    
    /******************METODOS KELVIN**********************/
    Kelvin.prototype = Object.create(Temperatura.prototype);
    Kelvin.prototype.constructor = Kelvin;
    
    function Kelvin(valor) {
      Temperatura.call(this, valor, "k");
      this.name = "Kelvin";
    }
    
    //Kelvin to celsius
    Kelvin.prototype.toCelsius = function () {
      var converted = this.getValor() - 273.15;
      return converted;
    }
    
    //Kelvin to fahrenheit
    Kelvin.prototype.toFahrenheit = function () {
      var result = ((this.getValor() - 273.15) * 9/5) + 32;
      return result;
    }
  
  
    Medida.measures = {
      "f" : Fahrenheit,
      "c" : Celsius,
      "k" : Kelvin
    };


    exports.Temperatura = Temperatura;
    exports.Celsius = Celsius;
    exports.Fahrenheit = Fahrenheit;
    exports.Kelvin = Kelvin;
    
})(this);