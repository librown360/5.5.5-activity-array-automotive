//this includes the vehicle class as a module
// import { Vehicle } from "./vehicleBaseClass.js";
const VehicleModule = require("./vehicleBaseClass.js")

// A28 Mecury Sedan Properties
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
    }

    loadPassenger(num) {
        this.passenger = num
        if(this.passenger < this.maximumPassengers) {
            let room = this.maximumPassengers - this.passenger
            console.log('We have room for ' + room + ' more!')
        } else 
            if (this.passenger === this.maximumPassengers) {
                console.log('No more passengers allowed!')
            } else {
                console.log('Only five passengers allowed!')
            }
    }
    start() {
        super.start()
    }
// I do not believe a function and a propertie can have the same name
// I received an error that "scheduleService is not a function" until I changed the function name
    service(mileage) {
        if(mileage > 30000) {
            this.scheduleService = true
            console.log('Time for maintenance!')
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "2005", "blue", 150000);
// checking to see if I can start & accelerate this vehicle
v.start()
v.accelerate()  // I cannot accelerate because there is no way to pass fuel value "I think"
console.log(v)

// checking to see if I can call functions from both modules
let mercury = new Car("Mecury", "Sedan", "2020", "black", 35000)
// These four functions work great!
mercury.loadPassenger(5)
mercury.start()
mercury.accelerate()   
mercury.service(35000)
console.log(mercury)
// These functions are giving errors -- not sure why
// mercury.drive() 
// mercury.brake() 