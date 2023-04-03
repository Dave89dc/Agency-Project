class Order {

    constructor (product, quantity, unitPrice) {
        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    };

    toString () {
        return ("Prodotto: " + this.product + '\n' +
        "Quantità: " + this.quantity + '\n' +
        "Prezzo unitario: " + this.unitPrice.toFixed(2) + "€" + '\n' +
        "Costo totate: " + this.totalPrice().toFixed(2) + "€"); 
    };

    totalPrice () {
        return (this.quantity*this.unitPrice);
    };

};

