(function (exports) {
    "use strict";
    
    /* Expresion regular extendida */
    var regexp = XRegExp('(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) #valor \n' +
                         '(?<espacio> \\s*) \n ' +
							           '(?<tipo> \\s*[fFcCkKmMpPdDeE])          # tipo de entrada   \n' + 
							           '(?<to> \\s*(?:to)?\\s*)  # to opcional \n' +
							           '(?<destino> [fFcCkKmMpPdDeE])       # tipo destino', 'x');
    
    function Medida(valor, tipo) {      
        /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */ 
        /* ademas de new Medida(45.2, "Km") */
        this.val = valor; 
        this.tip = tipo;  

    };

    Medida.constructor = Medida; 
    Medida.measures = Medida.measures || {};
    
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
          return err;
          //return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
        }
      }
      else
        return "Introduzca una temperatura valida: 330e-1 F to C";
    };


    exports.Medida = Medida;
   
})(this);