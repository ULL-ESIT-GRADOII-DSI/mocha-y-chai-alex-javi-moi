!function(){function t(t,o){Medida.call(this,t,o)}function o(o){t.call(this,o,"d")}function e(o){t.call(this,o,"e")}t.prototype=new Medida,t.prototype.constructor=t,o.prototype=new t,o.prototype.constructor=o,Medida.measures.d=o,o.prototype.toEuro=function(){return.899*this.val},e.prototype=new t,e.prototype.constructor=e,Medida.measures.e=e,e.prototype.toDollar=function(){return 1.1122*this.val}}(this);