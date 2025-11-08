// đúng tên biến và nằm trong {}
import {myName as newName, sayHello} from './test.js'
// có thể khác tên biến và KHÔNG {}
import xyz from './test.js'
console.log(xyz);

console.log(newName);
sayHello();

const students = [
  { name: "Hà", age: 20, gender: "Nữ", mark: 8.5 },
  { name: "Long", age: 21, gender: "Nam", mark: 6.8 },
  { name: "Trang", age: 19, gender: "Nữ", mark: 9.2 },
  { name: "Minh", age: 22, gender: "Nam", mark: 7.4 },
  { name: "Hương", age: 20, gender: "Nữ", mark: 3.9 }
];
// forEach

students.forEach((item, index, array) => {

  // console.log(item);
  // console.log(index);
  // // console.log(array);
  // console.log(
  //   `Họ và tên: ${item.name}, tuổi: ${item.age}, Giới tính:${item.gender}, điểm: ${item.mark}`
  // );
})

// map: duyệt qua các phần tử trong mảng và trả về mảng mới, 
// các tử trong mảng mởi trả về thông qua return

const newStudents = students.map((item) => {
  let rank = '';
  if (item.mark > 9)
    rank = 'Giỏi'
  else if (item.mark > 7)
    rank = 'Khá'
  else if (item.mark > 5)
    rank = 'Trung bình'
  else
    rank = 'Yếu'

  return {
    ...item, // spread
    // rank: rank
    rank
  }
})

// console.log(newStudents);
// filter: duyệt mảng, trả về mảng mới, có điều kiện ở return

const menStudent=students.filter((item)=>{
  return item.gender=='Nữ'
})
// console.log(menStudent);
const ageStudent =students.filter((item)=>{
  return item.age >= 20;
})
// console.log(ageStudent);

//reduce
// let total=0;
// students.forEach(item=>{
//   total+=item.mark
// })
// console.log(total);

const totalReduce=students.reduce((preValue,item,index,array)=>{
  return preValue+=item.mark
},0)
// console.log(totalReduce);

//bài tập
const user = [

  { id: 1, name: "Nam", age: 18, gender: "male", mark: 8 },
  { id: 2, name: "Lan", age: 17, gender: "female", mark: 6 },
  { id: 3, name: "Hùng", age: 19, gender: "male", mark: 4 },
  { id: 4, name: "Mai", age: 18, gender: "female", mark: 9 },
  { id: 5, name: "An", age: 16, gender: "male", mark: 7 },
];
//câu 1
// user.forEach((item, index, array) => {
//   console.log(
//     `Họ và tên: ${item.name}, ${item.age} tuổi, điểm: ${item.mark}`
//   );
// })

//câu 2
const markUser =user.filter((item)=>{
  return item.mark >= 7;
})
//  console.log(markUser);

//câu 3
const newUser = students.map((item) => {
 return`${item.name}(${item.gender})- ${item.age} tuổi - Điểm: ${item.mark}`
})
// console.log(newUser);

//câu 4
let total=0;
user.forEach(item=>{
  total+=item.mark
})
// console.log(total);



// let maxMark = user[0].Mark;
// let bestStudent = user[0];

// for (let i = 1; i < students.length; i++) {
//   if (students[i].Mark > maxMark) {
//     maxMark = students[i].Mark;
//     bestStudent = students[i];
//   }
// }

// console.log("\n=== Sinh viên điểm cao nhất ===");
// console.log(`Sinh viên có điểm cao nhất: ${bestStudent.name} - ${bestStudent.Mark} điểm`);








