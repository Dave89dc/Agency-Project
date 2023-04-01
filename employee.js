class Employee extends Person {

    constructor (name, surname, dob, clients = []) {
        super(name, surname, dob);
        this.clients = clients;
    };

    toString () {
        return (super.toString() + '\n' +
        "NUMERO CLIENTI: " + this.sumClients() + '\n' +
        "GUADAGNO TOTALE: " + this.totalEarnings() + '€' + '\n' +
        '\n' + "MIGLIOR CLIENTE: " + '\n'+
        this.bestClient());
    };

    sumClients () {
        return this.clients.length;
    };

    totalEarnings () {
        let clients = this.clients;
        let sum = 0;
        for (let i = 0; i < clients.length; i++) {
              sum += clients[i].totalOrdersPrice();
        };
        return sum;
    };

    bestClient () {
        let clients = this.clients;
        let bestClient = clients[0];
        for (let i = 1; i < clients.length; i++) {
            let previousPrice = bestClient.totalOrdersPrice();
            let currentPrice = clients[i].totalOrdersPrice();
            if (previousPrice < currentPrice) {
                bestClient = clients[i];
            };
        };
        return bestClient.toString();
    };

    addClient (client) {
        let clients = this.clients;
        for (let i = 0; i < clients.length; i++) {
            if (client === clients[i]) {
                return clients;
            };
        };
        clients.push(client);
        return clients;
    };

    removeClient (client) {
        let clients = this.clients;
        for (let i = 0; i < clients.length; i++) {
            if (client === clients[i]) {
                clients.splice(i, 1);
            };
        };
        return clients;
    };

};