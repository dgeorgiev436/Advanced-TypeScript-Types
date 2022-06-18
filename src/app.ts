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

// *************************** Function Overloads and Using union types ***************************
// Typescript merges the function information provided on lines 29,30 and 31 and the function declaration on line 32.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable){
// 	Run different code depending on the type aka typeguards
	if(typeof a === "string" || typeof b === "string"){
		return a.toString() + b.toString();
	}else{
		return a + b;
	}
}
const result = add(1,5);


// *************************** Optional Chaining ***************************
const fetchUserData = {
	id: "u1",
	name: "Max",
	job: {
		title: "CEO",
		description: "My company"
	}
}
// Using "?" for optional chaining to check if data exists
console.log(fetchUserData?.job?.title);


// *************************** Nullish Coalescing "??" ***************************
// Typescript "??" operator that checks if value is either null or undefined
const userInput = null;

const storedData = userInput ?? "Default"

console.log(storedData);

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


// *************************** Discriminated UNIONS ***************************
// There is a common property in both interfaces that helps us with type guarding
interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
	let speed;
	switch(animal.type){
		case "bird":
			speed = animal.flyingSpeed;
			break;
		case "horse":
			speed = animal.runningSpeed;
			break;
	}
	
	console.log("Moving with speed " + speed);
}


moveAnimal({type: "bird", flyingSpeed: 58})


// *************************** Type Casting ***************************
// 2 ways to implement type casting in TypeScript
// ! mark after expression declares that the expression will never be null
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input");


if(userInputElement){
	(userInputElement as HTMLInputElement).value = "Hey there"	
}


// *************************** Index Properties ***************************

interface ErrorContainer {
	[prop: string]: string
}

const error: ErrorContainer = {
	email: "Not a valid email!",
	username: "Must start with a capital character!"
}

// *************************** Function Overloads ***************************