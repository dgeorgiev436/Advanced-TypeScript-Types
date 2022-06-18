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