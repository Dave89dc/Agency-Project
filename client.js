class Client extends Person {

    constructor (name, surname, dob, address, orders = []) {
        super(name, surname, dob);
        this.address = address;
        this.orders = orders;
    };

    toString() {
        return (super.toString() + '\n' +
        "INDIRIZZO: " + this.address + '\n' +
        "NUMERO ORDINI: " + this.addOrders() + '\n' +
        "SPESA TOTALE: " + this.totalOrdersPrice()  + "€" + '\n' +
        "LISTA ORDINI:" + '\n' +
        this.listOfOrders() +
        "-------------------------------------");
    };

    addOrders () {
        return this.orders.length;
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

};