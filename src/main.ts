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
};
voidFunctionReturn();

let anyArray: any[] = [1, "sdf", true];
console.log(anyArray);

// Enum
enum Directions {
    Up,
    Down = 5,
    Left,
    Right,
}
console.log(Directions.Down);
console.log(Directions[6]);

// Never
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};
// error(msg)

// Object
const create = (obj: object | null): void => {
    console.log(obj);
};
create({ first: 1 });
create(null);
let userA: { name: string; age: number };
userA = {
    name: "Misha",
    age: 15,
};

// Classes
class UserClass {
    // first way
    private nickname: string;

    constructor(
        nickname: string,
        // second way
        public name: string,
        protected age: number,
        readonly pass: number
    ) {
        this.nickname = nickname;
    }

    setNickname(nickname: string) {
        this.nickname = nickname
    }

    set myNickname(nickname: string) {
        this.nickname = nickname
    }

}
const userSasha = new UserClass("Ecomeel", "Sasha", 23, 12345);
userSasha.setNickname('Eco');
console.log(userSasha);
userSasha.myNickname = 'ecom';
console.log(userSasha)