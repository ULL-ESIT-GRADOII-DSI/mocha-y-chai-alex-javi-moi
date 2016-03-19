(function(exports) {


    function Moneda(valor,tipo) {
      Medida.call(this, valor, tipo);
    }
    Moneda.prototype = new Medida();
    Moneda.prototype.constructor = Moneda;
  
  
  
    /****************METODOS DOLLAR*************************/
    function Dollar(valor) {
      Moneda.call(this, valor, "d");
    }

    Dollar.prototype = new Moneda();
    Dollar.prototype.constructor = Dollar;
    Medida.measures.d = Dollar;

    
    //Dollar to Euro
    Dollar.prototype.toEuro = function () {
      return (this.val * 0.899);
    }

     Dollar.prototype.toLibras = function () {
      return (this.val * 0.69057);
    }

    /********************METODOS EURO********************/
    function Euro(valor) {
      Moneda.call(this, valor, "e");
    }
    
    Euro.prototype = new Moneda();
    Euro.prototype.constructor = Euro;
    Medida.measures.e = Euro;


    //Euro to Dollar
    Euro.prototype.toDollar = function () {
      return (this.val * 1.1122);
    }
    Euro.prototype.toLibras = function () {
      return (this.val * 0.77826);
    }
    
    
    /********************METODOS LIBRAS********************/
    function Libras(valor) {
      Moneda.call(this, valor, "l");
    }
    
    Libras.prototype = new Moneda();
    Libras.prototype.constructor = Libras;
    Medida.measures.l = Libras;


    //Libras to Euros
    Libras.prototype.toEuro = function () {
      return (this.val * 1.2849);
    }
    
    
    Libras.prototype.toDollar=function(){
      return(this.val * 1.4481)
    }
  
    exports.Moneda = Moneda;
    exports.Dollar = Dollar;
    exports.Euro = Euro;
    exports.Libras= Libras;
    
})(this);