"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado');
        }
        Avenger.prototype.getFullName = function () {
            return this.name + " " + this.realName;
        };
        return Avenger;
    }());
    var Xmen = /** @class */ (function (_super) {
        __extends(Xmen, _super);
        function Xmen(name, realName, isMutant) {
            var _this = _super.call(this, name, realName) || this;
            _this.isMutant = isMutant;
            console.log('Constructos xmen llamado');
            return _this;
        }
        Object.defineProperty(Xmen.prototype, "fullName", {
            get: function () {
                return this.name + " - " + this.realName;
            },
            set: function (name) {
                if (name.length < 3) {
                    throw new Error('El nombre debe ser mayor de 3 letras');
                }
                this.name = name;
            },
            enumerable: false,
            configurable: true
        });
        Xmen.prototype.getFullNameFromXmen = function () {
            console.log(_super.prototype.getFullName.call(this));
        };
        return Xmen;
    }(Avenger));
    var wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName);
    wolverine.fullName = 'Oxim';
    console.log(wolverine.fullName);
    // wolverine.getFullNameFromXmen();
})();
