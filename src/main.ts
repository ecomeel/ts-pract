let a: string = "hello";

a = "sdfsdf";

console.log(a);

const greeting = (name: string, age: number): boolean => {
    console.log("hello", name, age);
    return true;
};

const b: boolean = greeting("sasha", 23);

console.log(b);

const newDate = new Date().toDateString();
const c: Date = new Date();
console.log(newDate);

const str: string = "a b d";
console.log(str.split(" "));

const startString = `shfksd ${str}`;
console.log(startString);

let g: Array<number> = [1, 2, 3];

console.log(g);

const helloObj = (user: { name: string; age: number }) => {
    console.log("hello", user.name, user.age);
};

helloObj({ name: "sasha", age: Number("23") });

// Types
type User = {
    name: string;
    age: number;
};
function printUser(usr: User) {
    console.log(usr.name, usr.age);
}
printUser({ name: "Gosha", age: 23 });

// Interfaces can extends
interface Car {
    model: string;
}
interface Hachback extends Car {
    passengers: number;
}
const hachback = {
    model: "VW",
    passengers: 5,
    // wheels: 4
};
interface Car {
    wheels?: number;
}
printCar(hachback);
function printCar(car: Hachback) {
    console.log(car.model, car.passengers);
}

// <------------------------------->
const voidFunctionReturn = (): void => {
    console.log("void function return!");
}
voidFunctionReturn();
