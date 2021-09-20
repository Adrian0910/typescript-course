"use strict";
(function () {
    /*
        Todas las funciones que no tengan su return deberan
        devolver undefined, por esto mismo, al asignar :void
        vamos a tener un error si ponemos un return con su argumento
    */
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
