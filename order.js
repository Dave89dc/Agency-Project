class Order {

    constructor (product, quantity, unitPrice) {
        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    };

    toString () {
        return ("PRODOTTO: " + this.product + '\n' +
        "QUANTITà: " + this.quantity + '\n' +
        "COSTO UNITARIO: " + this.unitPrice + "€" + '\n' +
        "COSTO TOTALE: " + this.totalPrice() + "€"); 
    };

    totalPrice () {
        return (this.quantity*this.unitPrice);
    };

};

