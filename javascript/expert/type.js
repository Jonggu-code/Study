// const user = {
//   name: "김철수",
//   age: 25
// };

// // 의도치 않게 값이 수정될 수 있음
// function updateUser(obj) {
//   obj.age = 26;
// }

// updateUser(user);
// console.log(user.age);  // 26 (원본 객체 수정됨)

// const user = {
//   name: "김철수",
//   age: 25,
// };

// function updateUser(obj) {
//   return { ...obj, age: 26 };
// }

// const updatedUser = updateUser(user);
// console.log(user.age); // 25 (원본 객체는 변경되지 않음)
// console.log(updatedUser.age); // 26 (새로운 객체 생성됨)

const obj1 = { name: "김철수", age: 25 };
const obj2 = obj1;
const obj3 = { ...obj1 };

// 객체 비교
console.log(obj1 === obj2); // false (값은 같지만 참조가 다름)
console.log(obj1 === obj3); // true (같은 참조를 가리킴)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
