var expect = chai.expect;

/* ******PRUEBAS PARA LA CLASE MEDIDA****** */
describe("Medida", function() 
{
        describe("constructor", function() {
            it("Deberia construir un objeto medida", function() {
                var cons = new Medida("32","c");
                
                expect(cons.val).to.equal("32");
                expect(cons.tip).to.equal("c");
            });
        });
    
        describe("#match", function() {
            it("Deberia hacer matching correctamente", function() {
                var match = Medida.match("32 c to f");
                
                expect(match.numero).to.equal("32");
                expect(match.tipo).to.equal("c");
                expect(match.destino).to.equal("f");
            });
        });
        
        describe("#convertir", function() {
            it("Deberia dar error al pasar a una temperatura desconocida", function() {
                expect(Medida.convertir("32f to j")).to.equal('Introduzca una temperatura valida: 330e-1 F to C');
            });
            
            it("Deberia dar error al pedir una conversion erronea", function() {
                expect(Medida.convertir("32k a k")).to.equal('Introduzca una temperatura valida: 330e-1 F to C');
            });
        });
});

/* *****PRUEBAS PARA LA CLASE TEMPERATURA***** */
describe("Temperatura", function() 
{
/*        describe("constructor", function() {
            it("Deberia construir un objeto temperatura", function() {
                var cons_t = new Temperatura("32","c");
                
                //expect(cons.val).to.equal(32);
                //expect(cons1.tip).to.equal("k");
            });
        });
        
        describe("Fahrenheit", function() {
            
            it("Deberia construir un objeto Fahrenheit", function() {
                var cons_f1 = new Fahrenheit(32);
                expect(cons_f1.val).to.equal(32);
            });
            
            it("Deberia convertir a Celsius", function() {
                var conv_f2 = new Fahrenheit(32);
                expect(conv_f2.toCelsius()).to.equal(0.00);
            });
            
            it("Deberia convertir a kelvin", function() {
                var conv_f3 = new Fahrenheit(32);
                expect(conv_f3.toKelvin()).to.equal(273,15);
            });
        });
        
        describe("Celsius", function() {
            
            it("Deberia construir un objeto celsius", function() {
                var cons_c1 = new Celsius(32);
                expect(cons_c1.val).to.equal(32);
            });
            
            it("Deberia convertir a fahrenheit", function() {
                var conv_c2 = new Celsius(32);
                expect(conv_c2.toFahrenheit()).to.equal(89.6);
            });
            
            it("Deberia convertir a kelvin", function() {
                var conv_c3 = new Celsius(32);
                expect(conv_c3.toKelvin()).to.equal(305.15);
            });
        });
        
        describe("Kelvin", function() {
            
            it("Deberia construir un objeto Kelvin", function() {
                var cons_k1 = new Kelvin(32);
                expect(cons_k1.val).to.equal(32);
            });
            
            it("Deberia convertir a fahrenheit", function() {
                var conv_k2 = new Kelvin(32);
                expect(conv_k2.toFahrenheit()).to.equal(-402.07);
            });
            
            it("Deberia convertir a kelvin", function() {
                var conv_k3 = new Kelvin(32);
                expect(conv_k3.toCelsius()).to.equal(-241.15);
            });
        });*/
});


/* *****PRUEBAS PARA LA CLASE DISTANCIA***** */



/* *****PRUEBAS PARA LA CLASE MONEDA***** */

