(function(exports) {
    
    function Distancia(valor,tipo){
        Medida.call(this,valor,tipo);
    }
    Distancia.prototype = new Medida();
    Distancia.prototype.constructor= Distancia;
 
    //***********Metodos metros************
    function Metros(valor) {
      Distancia.call(this, valor, "m");
    }
    
    Metros.prototype = new Distancia();
    Metros.prototype.constructor = Metros;
    Medida.measures.m = Metros;

    
    Metros.prototype.toPulgadas = function () {
      return (this.val *39.3701);
    }
    
    
    //**********Metodos pulgadas**************
    function Pulgadas(valor) {
      Distancia.call(this, valor, "p");
    }
    
    Pulgadas.prototype = new Distancia();
    Pulgadas.prototype.constructor = Pulgadas;
    Medida.measures.p = Pulgadas;
  
    
    Pulgadas.prototype.toMetros = function () {
      return (this.val* 0.0254);
    }
    
    exports.Distancia = Distancia;
    exports.Metros = Metros;
    exports.Pulgadas = Pulgadas;
    
})(this);