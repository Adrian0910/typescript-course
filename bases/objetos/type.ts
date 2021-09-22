(() => {

    // Definicion
    type Hero = {
        name: string,
        age?: number;
        powers: string[],
        getName?: () => string;
    }
    // literal obj
    /* 
        Observar la diferencia entre ambos obj, mientras que en uno
        tenemos que mandar todos los parametros en el otro simplemente 
        indicamos que es de tipo Hero
    */
    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad','Viajar en el tiempo']
    }

    // let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
    //     name: 'Clark kent',
    //     age: 60,
    //     powers: ['Super velocidad']
    // }


    let superman: Hero = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name
        }
    }


})()