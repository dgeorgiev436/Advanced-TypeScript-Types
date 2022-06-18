// Intersection type

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
	name: "Max",
	privileges: ["create-server"],
	startDate: new Date()
}


type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// Using union types
function add(a: Combinable, b: Combinable){
// 	Run different code depending on the type aka typeguards
	if(typeof a === "string" || typeof b === "string"){
		return a.toString() + b.toString();
	}else{
		return a + b;
	}
}

// UnknownEmployee of union type either Employee or Admin
type UnknownEmployee = Employee | Admin;

// Function takes arguemnt of type UnknownEmployee
function printEmployeeInformation(emp: UnknownEmployee){
// 	Run type guard conditionals to perform different tasks depending on the argument type
	if("privileges" in emp){
		console.log(`This is ${emp.name} with the following privileges: ${emp.privileges}`)
	}
	
	if("startDate" in emp){
		console.log(`This is ${emp.name} with a starting date of: ${emp.startDate}`);
	}
	
}

// Run function
printEmployeeInformation(employee1);


class Car {
	drive(){
		console.log("Driving...");
	}
}

class Truck {
	drive(){
		console.log("Driving a truck...");
	}
	
	loadCargo(amount: number){
		console.log("Loading cargo... " + amount)
	}
}

// Union Type
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
	vehicle.drive();
// 	Use instance of for type guard
	if(vehicle instanceof Truck){
		vehicle.loadCargo(12);
	}
}

useVehicle(v1);
useVehicle(v2);