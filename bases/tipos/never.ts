(() => {

    /* 
        never significa que mi funcion no debe terminar exitosamente
    */


    const error = ( message: string ):(never|number) => {

        if( false ) {
            throw new Error(message);
        }
        return 1;

    }

    error('hello');


})()