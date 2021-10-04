"use strict";
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, team, realName, avgAge) {
            if (avgAge === void 0) { avgAge = 55; }
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }
        Avenger.getAvgAge = function () {
            return this.name;
        };
        // method
        Avenger.prototype.bio = function () {
            return this.name + " (" + this.team + ")";
        };
        // private name: string = 'Scott';
        // private team: string;
        // public realName?: string;
        Avenger.avgAge = 35;
        return Avenger;
    }());
    var antman = new Avenger('Antman', 'Capitan America');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
