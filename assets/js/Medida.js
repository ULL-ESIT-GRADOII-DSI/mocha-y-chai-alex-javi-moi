(function (exports) {
    "use strict";

    var regexp = new XRegExp();

    function Medida(valor, tipo) {
        /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
        /* ademas de new Medida(45.2, "Km") */
        this.valor = valor;
        this.tipo = tipo;
    }

    function Temperatura(valor, tipo) {
        Medida.call(this, valor, tipo);
    }

    Temperatura.prototype = new Medida();
    exports.Temperatura = Temperatura;

    exports.convertir = function () {
        var valor = document.getElementById('convert').value,
        elemento = document.getElementById('converted');

        valor = valor.toLowerCase();
        valor = XRegExp.exec(valor, regexp);
        if (valor) {
            var numero = valor.cantidad,
                tipo = valor.medida[0],
                tipo_dest = valor.medida_dest[0];

            numero = parseFloat(numero);
            console.log("Valor: " + numero + ", Tipo: " + tipo + ", Destino: " + tipo_dest);

            var obj_numer = null;
            switch (tipo) {
                case 'c':
                    obj_numer = new Celsius(numero);
                break;
                case 'f':
                    obj_numer = new Fahrenheit(numero);
                break;
                case 'k':
                    obj_numer = new Kelvin(numero);
                break;
            }
            switch (tipo_dest) {
                case 'c':
                    elemento.innerHTML = obj_numer.toCelsius().toFixed(2) + " Celsius";
                break;
                case 'f':
                    elemento.innerHTML = obj_numer.toFahrenheit().toFixed(2) + " Fahrenheit";
                break;
                case 'k':
                    elemento.innerHTML = obj_numer.toKelvin().toFixed(2) + " Kelvin";
                break;
            }
        } else {
            console.error('Error en la expresión');
            elemento.innerHTML = "Error en la entrada";
        }
    };
})(this);