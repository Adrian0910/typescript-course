(() => {

    class Apocalipsis {
        
        static intance:Apocalipsis;

        private constructor( public name:string ){

        }

        static callApocallipsis(): Apocalipsis {
            if( !Apocalipsis.intance ) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis');
            }
            return Apocalipsis.intance;
        }

        changeName( newName: string ):void {
            this.name = newName;
        }
    }

    const apocalipsis = Apocalipsis.callApocallipsis();
    const apocalipsis2 = Apocalipsis.callApocallipsis();
    const apocalipsis3 = Apocalipsis.callApocallipsis();

    apocalipsis.changeName('oxim');

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3');

    console.log(apocalipsis);
    console.log(apocalipsis2);
    console.log(apocalipsis3);

})()