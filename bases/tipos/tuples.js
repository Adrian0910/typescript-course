"use strict";
(function () {
    /*
        const hero = ['Dr Strange', 100]; Esto es un arreglo pero...
        Siq ueremos que sea reconocido comop tubla, es decir, que el
        primer valor siempre sea un String y el segundo un number
        tenemos que ponerloa si:
        const hero: [string, number] = ['Dr Strange', 100];
    */
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'hello';
    hero[1] = 117;
    hero[2] = false;
    console.log(hero);
})();
