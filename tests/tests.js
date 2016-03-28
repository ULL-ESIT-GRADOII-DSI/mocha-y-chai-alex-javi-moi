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
            it("Deberia construir un objeto pero solo el valor", function() {
                var cons = new Medida("32","c");
                
                expect(cons.val).to.equal("32");
                //expect(cons.tip).to.equal("c");
            });
            
            it("Deberia construir un objeto pero solo el tipo", function() {
                var cons = new Medida("32","c");
                
               // expect(cons.val).to.equal("32");
                expect(cons.tip).to.equal("c");
            });
            it("Deberia construir el objeto medida sin tipo", function() {
                var cons1 = new Medida("32c");
                expect(cons1.val).to.equal("32");
                expect(cons1.tip).to.equal("c");
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
            it("Deberia convertir correctamente", function() {
                expect(Medida.convertir("0c to k")).to.equal('273.15 toKelvin');
            });
            
            it("Deberia dar error al pasar a una temperatura desconocida", function() {
                expect(Medida.convertir("32f to j")).to.equal('Introduzca una temperatura valida: 330e-1 F to C');
            });
            
            it("Deberia dar error al pedir una conversion erronea", function() {
                expect(Medida.convertir("32k a k")).to.equal('Introduzca una temperatura valida: 330e-1 F to C');
            });
            
            it ("Deberia dar error al pasar a una temperatura desconocida", function() {
                expect(Medida.convertir("32w to j")).to.equal('Introduzca una temperatura valida: 330e-1 F to C'); 
            });
            it ("Deberia dar error al pasar a una temperatura desconocida", function() {
                expect(Medida.convertir("32c to d")).to.equal('Desconozco como convertir desde "c" hasta "d"'); 
            });
        });
});


/* *****PRUEBAS PARA LA CLASE TEMPERATURA***** */
describe("Temperatura", function() 
{
        describe("constructor", function() {
            it("Deberia construir un objeto temperatura", function() {
                var cons_t = new Temperatura(32,"k");
                
                expect(cons_t.val).to.equal(32);
                expect(cons_t.tip).to.equal("k");
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
                expect(conv_f3.toKelvin()).to.equal(273.15);
            });
            
            it("Deberia convertir a Rankine", function() {
                var conv_f4 = new Fahrenheit(0);
                expect(conv_f4.toRankine()).to.equal(459.67);
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
            
            it("Deberia convertir a Rankine", function() {
                var conv_c4 = new Celsius(0);
                expect(conv_c4.toRankine()).to.equal(491.67);
            });
        });
        
        describe("Kelvin", function() {
            
            it("Deberia construir un objeto Kelvin", function() {
                var cons_k1 = new Kelvin(32);
                expect(cons_k1.val).to.equal(32);
            });
            
            it("Deberia convertir a Fahrenheit", function() {
                var conv_k2 = new Kelvin(32);
                expect(conv_k2.toFahrenheit()).to.equal(-402.07);
            });
            
            it("Deberia convertir a Celsius", function() {
                var conv_k3 = new Kelvin(0);
                expect(conv_k3.toCelsius()).to.equal(-273.15);
            });
            
            it("Deberia convertir a Rankine", function() {
                var conv_k4 = new Kelvin(0);
                expect(conv_k4.toRankine()).to.equal(0);
            });
        });
        
        describe("Rankine", function() {
            
            it("Deberia construir un objeto Rankine", function() {
                var cons_r1 = new Rankine(32);
                expect(cons_r1.val).to.equal(32);
            });
            
            it("Deberia convertir a Fahrenheit", function() {
                var conv_r2 = new Rankine(32);
                expect(conv_r2.toFahrenheit()).to.equal(-427.67);
            });
            
            it("Deberia convertir a Celsius", function() {
                var conv_r3 = new Rankine(32);
                expect(conv_r3.toCelsius()).to.equal(-255.37222222222223);
            });
            
            it("Deberia convertir a kelvin", function() {
                var conv_r4 = new Rankine(32);
                expect(conv_r4.toKelvin()).to.equal(17.77777777777778);
            });
        });
});


/* *****PRUEBAS PARA LA CLASE DISTANCIA***** */

describe("Distancia", function() {
   
        describe("constructor",function() {
           it("Deberia construir un objeto Distancia", function(){
                var dis = new Distancia(1, "m");
                expect(dis.val).to.equal(1);
                expect(dis.tip).to.equal("m");
           });
        }); 
       
        describe("Metros", function() {
            
            it("Deberia construir un objeto Metros", function() {
                var dis1 = new Metros(1);
                expect(dis1.val).to.equal(1);
            });
            
        it("Deberia convertir a Pulgadas", function() {
                var dis2 = new Metros(1);
                expect(dis2.toPulgadas()).to.equal(39.3701);
            });
            
        });
        
        describe("Pulgadas", function() {
            
            it("Deberia construir un objeto Pulgadas", function() {
                var dis3 = new Pulgadas(1);
                expect(dis3.val).to.equal(1);
            });
            
            it("Deberia convertir a Metros", function() {
                var dis4 = new Pulgadas(1);
                expect(dis4.toMetros()).to.equal(0.0254);
            });
            
        });
        
        
  
    
});

/* *****PRUEBAS PARA LA CLASE MONEDA***** */


describe("Moneda", function() {
   
        describe("constructor",function() {
           it("Deberia construir un objeto Moneda", function(){
                var mon = new Moneda(1, "d");
                expect(mon.val).to.equal(1);
                expect(mon.tip).to.equal("d");
           });
        });
        
        describe("Dollar",function(){
            it("Debería construir un objeto Dollar", function(){
               var mon1 = new Dollar(1);
               expect(mon1.val).to.equal(1);
            });
            it("Deberia pasar a Euros",function() {
               var mon2 = new Dollar(1);
               expect(mon2.toEuro()).to.equal(0.899);
            });
            
            it("Deberia pasar a Libras",function() {
               var mon5 = new Dollar(1);
               expect(mon5.toLibras()).to.equal(0.69057);
            });
        });
        
        describe("Euros", function() {
           it("Deberia construir un objeto Euro",function(){
             var mon3 = new Euro(1);
             expect(mon3.val).to.equal(1);
           });
           
           it("Deberia pasar a Dollar",function() {
              var mon4= new Euro(1);
              expect(mon4.toDollar()).to.equal(1.1122);
           });
           
           it("Deberia pasar a Libras",function() {
               var mon6 = new Euro(1);
               expect(mon6.toLibras()).to.equal(0.77826);
            });
        });
        
        describe("Libras", function() {
           it("Deberia construir un objeto Libras",function(){
             var mon7 = new Libras(1);
             expect(mon7.val).to.equal(1);
           });
           
           it("Deberia pasar a Dollar",function() {
              var mon8= new Libras(1);
              expect(mon8.toDollar()).to.equal(1.4481);
           });
           
           it("Deberia pasar a Euro",function() {
               var mon9 = new Libras(1);
               expect(mon9.toEuro()).to.equal(1.2849);
            });
        });
});

/* ***********PRUEBAS Sinon******** */
describe("Pruebas Sinon", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });


  describe("#medida", function() {
    it("No hay logs ni errores", function() {
      (new Medida());
      sinon.assert.notCalled(console.log);
      sinon.assert.notCalled(console.error);
    });
  });
  
  describe("#temperatura", function() {
    it("No hay logs ni errores", function() {
      (new Temperatura());
      sinon.assert.notCalled(console.log);
      sinon.assert.notCalled(console.error);
    });
  });
  
  describe("#distancia", function() {
    it("No hay logs ni errores", function() {
      (new Distancia());
      sinon.assert.notCalled(console.log);
      sinon.assert.notCalled(console.error);
    });
  });
  
  describe("#moneda", function() {
    it("No hay logs ni errores", function() {
      (new Moneda());
      sinon.assert.notCalled(console.log);
      sinon.assert.notCalled(console.error);
    });
  });
  
});