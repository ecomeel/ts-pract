let a:string = 'hello';

a = 'sdfsdf';

console.log(a)


const greeting = (name:string, age:number):boolean => {
  console.log('hello', name, age)
  return true
}

const b:boolean = greeting('sasha', 23);

console.log(b)

const newDate = new Date().toDateString();
const c:Date = new Date();
console.log(newDate);

const str = 'a b d';
console.log(str.split(' '))