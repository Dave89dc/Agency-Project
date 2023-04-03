class Client extends Person {

    constructor (name, surname, dob, address, orders = []) {
        super(name, surname, dob);
        this.address = address;
        this.orders = orders;
    };

    toString() {
        return (super.toString() + '\n' +
        "Indirizzo: " + this.address + '\n' +
        "Numero ordini: " + this.sumOfOrders() + '\n' +
        "Spesa totale: " + this.totalOrdersPrice().toFixed(2) + "€" + '\n' +
        "Lista ordini:" + '\n' +
        this.listOfOrders() +
        "-------------------------------------");
    };

    sumOfOrders () {
        return this.orders.length;
    };

    addOrders (newOrder) {
        this.orders.push(newOrder);
    };

    listOfOrders () {
        const orders = this.orders;
        let list = "";
        if (orders.length === 0) {
            return "Nessun ordine effettuato." + '\n';
        }
        for (let i = 0; i < orders.length; i++) {
                list += 
                "-------------------------------------" + '\n' +
                orders[i].toString() + '\n';
            };
        return list;
    };

    totalOrdersPrice () {
        let orders = this.orders;
        let sum = 0;
        for (let i = 0; i < orders.length; i++) {
            sum += orders[i].totalPrice();
        };
        return sum;
    };

    // VERSIONE REDUCE DI totalOrdersPrice:

    // totalOrdersPrice () {
    //     return this.orders.reduce((previous, current) => {
    //         previous += current.totalPrice();
    //         return previous;
    //     }, 0) ;
    // };

};