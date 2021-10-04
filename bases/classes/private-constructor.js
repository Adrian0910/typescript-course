"use strict";
(function () {
    var Apocalipsis = /** @class */ (function () {
        function Apocalipsis(name) {
            this.name = name;
        }
        Apocalipsis.callApocallipsis = function () {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis');
            }
            return Apocalipsis.intance;
        };
        Apocalipsis.prototype.changeName = function (newName) {
            this.name = newName;
        };
        return Apocalipsis;
    }());
    var apocalipsis = Apocalipsis.callApocallipsis();
    var apocalipsis2 = Apocalipsis.callApocallipsis();
    var apocalipsis3 = Apocalipsis.callApocallipsis();
    apocalipsis.changeName('oxim');
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3');
    console.log(apocalipsis);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
})();
