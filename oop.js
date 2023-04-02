// LISTA ORDINI:

const order1 = new Order ('Penna', 10, 2);
const order2 = new Order ('Matita', 20, 0.65);
const order3 = new Order ('Scotch', 40, 2.5);
const order4 = new Order ('Pinzatrice', 5, 8);
const order5 = new Order ('Stampante', 2, 180);
const order6 = new Order ('Sedia Operativa', 6, 120);
const order7 = new Order ('Tappetini per Mouse', 5, 12);
const order8 = new Order ('Raccoglitore per documenti', 10, 32);
const order9 = new Order ('Cartuccia Stampante', 4, 48);
const order10 = new Order ('Carta per stampante', 2, 36);
const order11 = new Order ('Climatizzatore', 3, 380);
const order12 = new Order ('Lampada da scrivania', 5, 22);
const order13 = new Order ('Monitor', 4, 102);
const order14 = new Order ('Macchina a cialde per caffé', 3, 64);
const order15 = new Order ('Cialde caffé', 2, 50);
const order16 = new Order ('Monitor', 2, 102);
const order17 = new Order ('Matita', 10, 0.65);
const order18 = new Order ('Scotch', 30, 2.5);
const order19 = new Order ('Pinzatrice', 4, 8);
const order20 = new Order ('Stampante', 4, 180);
const order21 = new Order ('Sedia Operativa', 5, 120);
const order22 = new Order ('Tappetini per Mouse', 4, 12);
const order23 = new Order ('Raccoglitore per documenti', 6, 32);
const order24 = new Order ('Cartuccia Stampante', 6, 48);
const order25 = new Order ('Carta per stampante', 3, 36);
const order26 = new Order ('Climatizzatore', 2, 380);
const order27 = new Order ('Lampada da scrivania', 3, 22);
const order28 = new Order ('Monitor', 4, 102);
const order29 = new Order ('Macchina a cialde per caffé', 2, 64);
const order30 = new Order ('Cialde caffé', 1, 50);

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);
console.log(order5);
console.log(order6);
console.log(order7);
console.log(order8);
console.log(order9);
console.log(order10);
console.log(order11);
console.log(order12);
console.log(order13);
console.log(order14);
console.log(order15);
console.log(order16);
console.log(order17);
console.log(order18);
console.log(order19);
console.log(order20);
console.log(order21);
console.log(order22);
console.log(order23);
console.log(order24);
console.log(order25);
console.log(order26);
console.log(order27);
console.log(order28);
console.log(order29);
console.log(order30);

// PREZZO TOTALE DEI SINGOLI ORDINI:

console.log(order1.totalPrice());
console.log(order2.totalPrice());
console.log(order3.totalPrice());
console.log(order4.totalPrice());
console.log(order5.totalPrice());
console.log(order6.totalPrice());
console.log(order7.totalPrice());
console.log(order8.totalPrice());
console.log(order9.totalPrice());
console.log(order10.totalPrice());
console.log(order11.totalPrice());
console.log(order12.totalPrice());
console.log(order13.totalPrice());
console.log(order14.totalPrice());
console.log(order15.totalPrice());
console.log(order16.totalPrice());
console.log(order17.totalPrice());
console.log(order18.totalPrice());
console.log(order19.totalPrice());
console.log(order20.totalPrice());
console.log(order21.totalPrice());
console.log(order22.totalPrice());
console.log(order23.totalPrice());
console.log(order24.totalPrice());
console.log(order25.totalPrice());
console.log(order26.totalPrice());
console.log(order27.totalPrice());
console.log(order28.totalPrice());
console.log(order29.totalPrice());
console.log(order30.totalPrice());

// DETTAGLI ORDINI:

console.log(order1.toString());
console.log(order2.toString());
console.log(order3.toString());
console.log(order4.toString());
console.log(order5.toString());
console.log(order6.toString());
console.log(order7.toString());
console.log(order8.toString());
console.log(order9.toString());
console.log(order10.toString());
console.log(order11.toString());
console.log(order12.toString());
console.log(order13.toString());
console.log(order14.toString());
console.log(order15.toString());
console.log(order16.toString());
console.log(order17.toString());
console.log(order18.toString());
console.log(order19.toString());
console.log(order20.toString());
console.log(order21.toString());
console.log(order22.toString());
console.log(order23.toString());
console.log(order24.toString());
console.log(order25.toString());
console.log(order26.toString());
console.log(order27.toString());
console.log(order28.toString());
console.log(order29.toString());
console.log(order30.toString());

// LISTA CLIENTI:

const client1 = new Client ("Alice", "Bianchi", "7/10/1988", "Via Balbi 22", [order1, order2, order3]);
const client2 = new Client ("Valerio", "D'Alessio", "15/12/1994", "Via Bozzano 2R", [order4, order5]);
const client3 = new Client ("Luca", "Giovani", "7/07/1995", "Via Bolzaneto 2/3", [order6, order7, order8]);
const client4 = new Client ("Paolo", "Odino", "14/09/1965", "Via Savignone 14R", [order9, order10, order11]);
const client5 = new Client ("Gilberto", "Costa", "12/03/1969", "Via Braia 3/3", [order12, order13, order14]);
const client6 = new Client ("Roberto", "Baraldi", "23/05/1978", "Via Semolina 15M", [order15, order16]);
const client7 = new Client ("Antonella", "Calafato", "1/03/1965", "Via Tortora 1/3", [order17, order18]);
const client8 = new Client ("Filippo", "Montaldo", "18/06/1972", "Via XX Settembre 2R", [order19, order20, order21]);
const client9 = new Client ("Luca", "Rossi", "7/10/1982", "Via Smeraldo 15/2", [order22, order23, order24]);
const client10 = new Client ("Stefano", "Villanuova", "13/01/1980", "Via San Bernardo 12M", [order25, order26, order27, order28]);
const client11 = new Client ("Zeb89", "Aonna", "6/09/1989", "Via Lezzo xx", [order29, order30]);

console.log(client1);
console.log(client2);
console.log(client3);
console.log(client4);
console.log(client5);
console.log(client6);
console.log(client7);
console.log(client8);
console.log(client9);
console.log(client10);
console.log(client11);

// DETTAGLIO CLIENTI:

console.log(client1.toString());
console.log(client2.toString());
console.log(client3.toString());
console.log(client4.toString());
console.log(client5.toString());
console.log(client6.toString());
console.log(client7.toString());
console.log(client8.toString());
console.log(client9.toString());
console.log(client10.toString());
console.log(client11.toString());

// ORDINI EFFETTUATI

console.log(client1.addOrders());
console.log(client2.addOrders());
console.log(client3.addOrders());

// SPESE TOTALI DEI CLIENTI:

console.log(client1.totalOrdersPrice());
console.log(client2.totalOrdersPrice());
console.log(client3.totalOrdersPrice());
console.log(client4.totalOrdersPrice());
console.log(client5.totalOrdersPrice());
console.log(client6.totalOrdersPrice());
console.log(client7.totalOrdersPrice());
console.log(client8.totalOrdersPrice());
console.log(client9.totalOrdersPrice());
console.log(client10.totalOrdersPrice());
console.log(client11.totalOrdersPrice());

// LISTA IMPIEGATI AZIENDALI:

const employee1 = new Employee ("Edoardo", "Di Francesco", "20/05/1988", [client1, client2, client3]);
const employee2 = new Employee ("Sara", "Gastaldi", "3/11/1993", [client4, client5, client6]);
const employee3 = new Employee ("Lidia", "Verdi", "21/07/1990", [client7, client8, client9]);
const employee4 = new Employee ("Antonio", "Prati", "6/04/1986", [client10, client11]);

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);

console.log(employee1.bestClient());
console.log(employee2.bestClient());
console.log(employee3.bestClient());
console.log(employee4.bestClient());

console.log(employee1.sumClients());
console.log(employee2.sumClients());
console.log(employee3.sumClients());
console.log(employee4.sumClients());

console.log(employee1.totalEarnings());
console.log(employee2.totalEarnings());
console.log(employee3.totalEarnings());
console.log(employee4.totalEarnings());

console.log(employee1.toString());
console.log(employee2.toString());
console.log(employee3.toString());
console.log(employee4.toString());

// MANAGER:

const manager = new Manager ("Irene", "Balbi", "2/04/1986", [employee1, employee2, employee3, employee4]);

console.log(manager.toString());
console.log(manager.totalEmployees());
console.log(manager.totalClients());
console.log(manager.totalEarnings());

