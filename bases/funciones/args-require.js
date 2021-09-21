"use strict";
(function () {
    var fullName = function (firstName, lastname) {
        return firstName + " " + lastname;
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
