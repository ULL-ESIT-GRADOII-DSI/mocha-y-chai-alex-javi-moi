(function(exports){
    
    function Temperatura(){
        Medida.call(this, valor,tipo);
    }
    Temperatura.prototype= new Medida();
    Temperatura.prototype.constructor= Temperatura;
}
    
    
)(this);