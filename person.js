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
        return ("NOME E COGNOME: " + this.name + " " + this.surname + '\n' +
        "DATA DI NASCITA: " + this._dob);
        // ETà: ${this.getAge()}
        // ${this.isBirthDay()}`;
    };

    // getAge () {
        
        
    // };

    // isBirthDay () {

    // };

};


