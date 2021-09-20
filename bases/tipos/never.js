"use strict";
(function () {
    /*
        never significa que mi funcion no debe terminar exitosamente
    */
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('hello');
})();
