class Manager extends Person {

    constructor(name, surname, dob, employees = []) {
        super(name, surname, dob);
        this.employees = employees;
    };

    toString () {
        return (super.toString() + '\n' +
        "IMPIEGATI: " + this.totalEmployees() + '\n' +
        "CLIENTI: " + this.totalClients() + '\n' +
        "GUADAGNI TOTALI: " + this.totalEarnings() + '€');
    };

    totalEmployees () {
        return this.employees.length;
    };

    totalEarnings () {
        let employees = this.employees;
        let sum = 0;
        for (let i = 0; i < employees.length; i++) {
              sum += employees[i].totalEarnings();
        };
        return sum;
    };

    totalClients () {
        let employees = this.employees;
        let sum = 0;
        for (let i = 0; i < employees.length; i++) {
            sum += employees[i].sumClients();
        };
        return sum;
    };

    hireEmployee (employee) {
        let employees = this.employees;
        for (let i = 0; i < employees.length; i++) {
            if (employee === employees[i]) {
                return employees;
            };
        };
        employees.push(employee);
        return employees;
    };

    fireEmployee (employee) {
        let employees = this.employees;
        for (let i = 0; i < employees.length; i++) {
            if (employee === employees[i]) {
                employees.splice(i, 1);
            };
        };
        return employees;
    };

};