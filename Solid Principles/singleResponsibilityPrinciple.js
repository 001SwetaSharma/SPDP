/*
All classes, functions and anything else inside your code should be single part. always break down the responsibility of your
code and make separate modules for individual responsibilities.

Why SRP?
Each section of the code will be having 1 sinlge reason to change
easy to maintain
easy to read
smaller function
easy to follow the code
*/
// Class responsible for user data (without SRP)
class Marker {
    constructor() {}

    marker(name, color, year, price) {
        this.name = name;
        this.year = year;
        this.color = color;
        this.price = price;
    }
}

class Invoice {
    constructor(marker, quantity){
        this.marker = marker;
        this.quantity = quantity;
    }

    calculateTotal() {
        let price = this.quantity * this.marker.price;
        return price;
    }

    printInvoice() {
        // write code to print invoice
    }

    saveToDb() {
        // write code to save to db;
    }
}
let mrkr = new Marker();
mrkr.marker('Local marker', 'Black', 1991, 20);

let inv = new Invoice(mrkr, 10);
console.log(inv.calculateTotal());

//WITH SRP
class invoiceSave {
    constructor(invoice) {
        this.invoice = invoice;
    }

    saveToDb() {
        //save to db
    }

    // now you can extend this class in future to save the invoice to files as well
}

class invoicePrinter {
    constructor(invoice) {
        this.invoice = invoice;
    }

    printInvoice() {
        //save to db
    }

    //Each class have the single responsibility, in future if i want to save different types of invoice then also this will work
}
// FINALLY keep the invoice class only for calculation as we have segregated invoicePrinter and invoiceSave. Now any changes in the
// classes will lead only to single change.

/* the above example is not following SRP because of the below 3 points
1. calculating total
2. printing invoice
3. saving to db

1. suppose in future i want to add gst and discount then the calculation logic will completely change.
2. and then suppose if i change my printing logic then also there will be change in the class
3. in future suppose i dont want to save the data in db, i want to save in files then also the class logic will change

*/


// Another Example (without SRP)
class calorieTracker {
    constructor(maxCalorie){
        this.maxCalorie = maxCalorie;
        this.currentCalorie = 0;
    }

    trackCalories(calorie) {
        this.currentCalorie += calorie;
        if(this.currentCalorie > this.maxCalorie) {
            // write the logging 
            console.log('Max Calorie exceeded');
        }
    }
}
const calories = new calorieTracker(5000);
calories.trackCalories(2000);
calories.trackCalories(2000);
calories.trackCalories(2000);

class calorieTracker1 {
    constructor(maxCalorie) {
        this.maxCalorie = maxCalorie;
        this.currentCalorie = 0;
    }

    trackCalories(calroie) {
        this.currentCalorie += calorie;
        if(this.trackCalories > this.maxCalorie) {
            //export the log message function from another file, so that it can be generically used
            //logMessage('Max Calorie exceeded');
        }
    }
}

//logMessage function
//export default function logMessage(msg) {
//    console.log(msg);
//}