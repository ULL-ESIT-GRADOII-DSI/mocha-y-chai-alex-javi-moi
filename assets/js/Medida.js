/* Expresion regular extendida */
var regexp = XRegExp('(?<numero> [+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?[ ]*) # valor \n' + 
							       '(?<tipo> [fck$€|km|mi])          # tipo de entrada   \n' + 
							       '(?<to> \\s*(?:to)?\\s*)  # to opcional \n' +
							       '(?<destino> [fck$€|km|mi])       # tipo destino', 'x');

(function (exports) {
    "use strict";
    
    
    function Medida(valor, tipo) {      
        /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */ 
        /* ademas de new Medida(45.2, "Km") */
   
        if (!tipo) {  
            var match = XRegExp.exec(valor, regexp);  
            var val = match.numero;
            var tip = match.tipo;
        } 
        else {
            var val = valor;
            var tip = tipo;
        }
        
        this.getValor = function() { return val; };
        this.getTipo = function() { return tip; };
      
    };


    Medida.match = function(entrada)
    {
        return XRegExp.exec(entrada, regexp);
    }



    Medida.convertir = function(valor) {
      
      var measures = Medida.measures;
      var match = Medida.match(valor);
      
      if (match) {
        var numero = match.numero,
            tipo   = match.tipo,
            destino = match.destino;
            console.log("numero: " + numero);
            console.log("tipo: " + tipo);
            console.log("destino: " + destino);
    
        try {
          var source = new measures[tipo](numero);          // new Fahrenheit(32)
          var target = "to"+measures[destino].name;         // "toCelsius"
          return source[target]().toFixed(2) + " "+target;  // "0 Celsius"
        }
        catch(err) {
          return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
        }
      }
      else
        return "Introduzca una temperatura valida: 330e-1 F to C";
    };


    exports.Medida = Medida;
   
})(this);