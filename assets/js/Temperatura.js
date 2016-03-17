(function() {
    
    function Temperatura(valor,tipo) {
      Medida.call(this, valor, tipo);
    }
    Temperatura.prototype = new Medida();
    Temperatura.prototype.constructor = Temperatura;
  
  
  
    /****************METODOS FAHRENHEIT*************************/
    function Fahrenheit(valor) {
      Temperatura.call(this, valor, "f");
    }
    
    Fahrenheit.prototype = new Temperatura();
    Fahrenheit.prototype.constructor = Fahrenheit;
    Medida.measures.f = Fahrenheit;
     
    //fahrenheit to celsius
    Fahrenheit.prototype.toCelsius = function () {
      return (this.val - 32) * 5/9;
    };
    
    //Fahrenheit to kelvin
    Fahrenheit.prototype.toKelvin = function () {
      return ((this.val - 32) / (9/5)) + 273.15;
    };
  

    /********************METODOS CELSIUS********************/
    function Celsius(valor) {
      Temperatura.call(this, valor, "c");
    }
    
    Celsius.prototype = new Temperatura();
    Celsius.prototype.constructor = Celsius;
    Medida.measures.c = Celsius;
        
    //Celsius to fahrenheit
    Celsius.prototype.toFahrenheit = function () {
      return ((this.val * 9/5)+ 32);
    };
    
    //Celsius to kelvin
    Celsius.prototype.toKelvin = function () {
      return (this.val + 273.15);
    };


    
    /******************METODOS KELVIN**********************/
    function Kelvin(valor) {
      Temperatura.call(this, valor, "k");
    }
    
    Kelvin.prototype = new Temperatura();
    Kelvin.prototype.constructor = Kelvin;
    Medida.measures.k = Kelvin;  
        
    //Kelvin to celsius
    Kelvin.prototype.toCelsius = function () {
      return (this.val - 273.15);
    };
    
    //Kelvin to fahrenheit
    Kelvin.prototype.toFahrenheit = function () {
      return (((this.val - 273.15) * 9/5) + 32);
    };

})(this);