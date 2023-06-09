class Person {

    constructor(name, surname, dob) {
        this.name = name;
        this.surname = surname;
        this._dob = dob; //new Date (dob);
    };

    get dob () {
        return this._dob;
    };

    toString () {
        return ("Nome e Cognome: " + this.name + " " + this.surname + '\n' +
        "Data di nascita: " + this._dob) + '\n' +
        "Età: " + this.getAge() + '\n' +
        this.isBirthDay();
    };

    getAge () {
        if (typeof this.dob === "string") {
            let dob = this.dob.split("/");
            let array = [];
            for (let i = 0; i < dob.length; i++) {
                array.unshift(dob[i]);
            };
            let newDate = array.join("-");
            let date = new Date();
            let birthDate = new Date(newDate);
            let milliSec = date - birthDate;
            let days = milliSec / (1000 * 60 *60 * 24);
            let year = Math.trunc(days / 365.25);
            return year;
        };
        return "";
    };

    isBirthDay () {
        if (typeof this.dob === "string") {
            let dob = this.dob.split("/");
            let array = [];
            for (let i = 0; i < dob.length; i++) {
                array.unshift(dob[i]);
            };
            let newDate = array.join("-");
            let date = new Date();
            let birthDate = new Date(newDate);
            let currentMonth = date.getMonth();
            let currentDay = date.getDate();
            let birthMonth = birthDate.getMonth();
            let birthDay = birthDate.getDate();
            if (currentMonth === birthMonth && currentDay === birthDay) {
                return "OGGI è IL SUO COMPLEANNO!";
            };
        };
        return "";
    };

};


