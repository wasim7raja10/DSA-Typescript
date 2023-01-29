/**
 * print information about car
 * @param car - car object
 */

function printCar(car: {
  make: string; 
  model: string; 
  year: number;
  chargeVoltage?: number;
}) {
	let str = `Make: ${car.make} Model: ${car.model} Year: ${car.year}`;
  if (typeof car.chargeVoltage !== "undefined") {
    str += ` Charge Voltage: ${car.chargeVoltage}`;
  }
  console.log(str);
}

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2015
};

let anotherCar = {
  make: "Tesla",
  model: "Model S",
  year: 2018,
  chargeVoltage: 240
};

let yetAnotherCar = {
  make: "Tesla",
  model: "Model S",
  year: 2018,
  chargeVoltage: 240,
  color: "red"
};

printCar(car);
printCar(anotherCar);
printCar(yetAnotherCar); // this will not fail because we are using variable instead of object directly
printCar({
  make: "Tesla",
  model: "Model S",
  year: 2018,
  chargeVoltage: 240,
  // color: "red"
}); // this will fail because we are using object directly

// index signature - allows you to add properties to an object that are not defined in the interface

const phones: {
  [k: string]: {
    country: string
    area: string
    number: string
  } | undefined
} = {}

phones.fax?.area

// tuple - array with a fixed number of elements
// with each element having a specific type

let tuple: [string, number, boolean] = ["hello", 5, true];

// tuple[0] = 5; // error

// limitation - not producing errors when you push to the array
tuple.push("world"); // ok
tuple.push(5); // ok
