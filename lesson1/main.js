
var name = 'chinhpd5';  // global: var let const : có thể

{
  // console.log(name);
  let myName ="chinhpd5"; // block: let const không thể
  // console.log(myName); // block: var có thể
}

// console.log(myName);

function test(){
  let myAge = 20; // function: var let const không thể
}

// console.log(myAge);

// hàm
function myFunction(){
  //logic code
  console.log("Xin chào các bạn");
}

// myFunction();

const myFunction2 = function () {
  console.log("Đây là hàm thứ 2");
}

// myFunction2();

const myFunction3 = (name) => {
  return `Chào mừng bạn ${name}`
}

// rút gọn của arrow function
const myFunction4 = name => `Chào mừng bạn ${name}, chúc mừng bạn`;

// console.log(myFunction3('chinhpd5'));
// console.log(myFunction4('chinhpd5'));


// Default Parameter
const total = (a,b=1) => a+b

// console.log(total(3));

// Destructing
const myArray = [1,2,3,4];
const [a,...restArr] = myArray;
// console.log(a);
// console.log(restArr);


// console.log(a); // 1
// // console.log(b); // undefined
// console.log(c); // 3
// console.log(d); // 4

const myObject = {
  name: 'chinhpd5',
  age: 20,
  child: {
    name: "chinhpd6"
  }
}

var {name, ...restObj} = myObject
// console.log(name);
// console.log(restObj);
// console.log(name);


// rest: phần còn lại ...
const sum = (a,...rest) => {
  let total = a;
  rest.forEach(item => {
    total+=item
  })
  return total
}
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8));


// spread: giải ...
const arr1 = [1,2];
const arr2 = [3,4];
const totalArr = [...arr1, ...arr2];
// console.log(totalArr);

const obj1 = {
  name: 'chinhpd5'
}

const obj2 = {
  age: 20
}

// console.log({...obj1, ...obj2});

// optional chaining (?.)

const myObj = {
  name: 'chinhpd5'
}

console.log(myObj.age);
// if(myObj.age){
//   console.log(myObj.age.x); // undefined
// }
  console.log(myObj.age?.x); // undefined

// logic sau
// console.log(123);

// nullish ?? undefined hoặc null

// ||

// console.log(0 || 1); // &&
// console.log(1 && 'a');

let z = 0;
let y = z ?? 'default'; // ??
// || loại bỏ các giá trị sai bao gồm 0
// ?? loại bỏ undefined và null (có nhận giá trị 0);
console.log(y);








