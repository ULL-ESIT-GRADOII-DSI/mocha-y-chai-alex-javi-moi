(function(exports) {
    "use strict";


    function Moneda(valor,tipo) {
      Medida.call(this, valor, tipo);
    }
    Moneda.prototype = Object.create(Medida.prototype);
    Moneda.prototype.constructor = Moneda;
  
  
  
    /****************METODOS DOLLAR*************************/
    Dollar.prototype = Object.create(Moneda.prototype);
    Dollar.prototype.constructor = Dollar;
   
  
    function Dollar(valor) {
      Moneda.call(this, valor, "$");
      this.name = "Dollar";
    }
    
    //Dollar to Euro
    Dollar.prototype.toEuro = function () {
      var converted = (this.getValor() * 0.899);
      return converted;
    }


    /********************METODOS EURO********************/
    Euro.prototype = Object.create(Moneda.prototype);
    Euro.prototype.constructor = Euro;
   
    
    function Euro(valor) {
      Moneda.call(this, valor, "€");
      this.name = "Euro";
    }
    
    //Euro to Dollar
    Euro.prototype.toDollar = function () {
      var converted = (this.getValor() * 1.1122);
      return converted;
    }
    
   
    Medida.measures = {
      "$" : Dollar,
      "€" : Euro
    };


    exports.Moneda = Moneda;
    exports.Dollar = Dollar;
    exports.Euro = Euro;

})(this);