(function (exports) {
    "use strict";
    
    /* Expresion regular para matching */
    var regexp1 = XRegExp('(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) #valor              \n' +
                          '(?<espacio> \\s*)                                                       \n' +
			  '(?<tipo> \\s*[fFcCkKmMpPdDeElLrR])                      # tipo de entrada   \n' + 
			  '(?<to> \\s*(?:to)?\\s*)                             # to opcional       \n' +
			  '(?<destino> [fFcCkKmMpPdDeElLrR])                       # tipo destino', 'x');
		
		 /* Expresion regular en caso de no introducir tipo */
      var regexp2 = XRegExp('(?<numero> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) #valor              \n' +
                            '(?<espacio> \\s*)                                                       \n' +
                            '(?<tipo> \\s*[fFcCkKmMpPdDeElLrR])                      # tipo de entrada   \n', 'x');
    
    
    function Medida(valor, tipo) {      

        if(tipo)
        {
          this.val = valor; 
          this.tip = tipo;  
        }
        else /* Si no se introduce tipo */
        {
          var notype = XRegExp.exec(valor, regexp2);
          if( notype ) 
          {
            this.val = notype.numero;
            this.tip = notype.tipo;
          }
        }
        
    };

    Medida.constructor = Medida; 
    Medida.measures = Medida.measures || {};
    
    Medida.match = function(entrada)
    {
        return XRegExp.exec(entrada, regexp1);
    }


    Medida.convertir = function(valor) {
      
      var measures = Medida.measures;
      var match = Medida.match(valor);
      
      if (match) {
        var numero = parseFloat(match.numero),
            tipo   = match.tipo,
            destino = match.destino;
            console.log("numero: " + numero);
            console.log("tipo: " + tipo);
            console.log("destino: " + destino);
    
        try {
          var source = new measures[tipo](numero);          // new Fahrenheit(32)
          var target = "to"+measures[destino].name;         // "toCelsius"//console.log(TARGET" + target);//
          return source[target]().toFixed(2) + " "+target;  // "0 Celsius";
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