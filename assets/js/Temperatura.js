(function(exports) {
    
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
    //Fahrenheit to Rankine
    Fahrenheit.prototype.toRankine = function () {
      return (this.val + 459.67);
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
    //Celsius to Rankine
    Celsius.prototype.toRankine = function () {
      return (((9/5)*this.val)+491.67);
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
    //Kelvin to Rankine
    Kelvin.prototype.toRankine = function () {
      return (this.val*(9/5));
    };
    
     /******************METODOS Rankine**********************/
    function Rankine(valor) {
      Temperatura.call(this, valor, "r");
    }
    
    Rankine.prototype = new Temperatura();
    Rankine.prototype.constructor = Rankine;
    Medida.measures.r = Rankine;  
        
    //Rankine to celsius
    Rankine.prototype.toCelsius = function () {
      return ((5/9)*(this.val-491.67));
    };
    
    //Rankine to fahrenheit
    Rankine.prototype.toFahrenheit = function () {
      return (this.val - 459.67);
    };
    //Rankine to Kelvin
     Rankine.prototype.toKelvin = function () {
      return (this.val*(5/9));
    };
    /* ******exports********* */
    exports.Temperatura = Temperatura;
    exports.Fahrenheit = Fahrenheit;
    exports.Celsius = Celsius;
    exports.Kelvin = Kelvin;
    exports.Rankine= Rankine;

})(this);