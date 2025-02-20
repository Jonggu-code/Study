// 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 객체 프로퍼티 (객체 속성)
// {} 안에 key : value 형식으로 적어주면 된다.
let person = {
  name: "박종찬", // key = name , value = "박종찬"
  age: 28, // key = age , value = 28
  hobby: "개발", // key = hobby , value = "개발"
  job: "Front-End Developer",
  extra: {},
  10: 20, // 숫자값도 key 로서 사용 가능
  "like cat": true, // 띄어쓰기가 포함된 값을 key 로 쓰고자 하면 "" 로 감싸주어야함
};

// 객체 프로퍼티를 다루는 방법
// 01. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법
let name = person.name;
console.log(name); // 박종찬
let name2 = person.name2;
console.log(name2); // undefined 뜸

// 괄호 표기법
let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 02. 새로운 프로퍼티 추가하는 방법
person.job = "backsu";
person["favoriteFood"] = "짜장면";

console.log(person); // job 과 favoriteFood key 값이 추가된다.

// 03. 프로퍼티를 수정하는 방법
person.job = "취업성공";
person["favoriteFood"] = "막걸리";

console.log(person); // job 과 favoriteFood value 값 수정

// 04. 프로퍼티 삭제 방법
delete person.job; // job 삭제
delete person["favoriteFood"]; // favoriteFood 삭제
console.log(person);

// 05. 프로퍼티 존재 유무 확인 (in 연산자)
let result1 = "name" in person; // name 프로퍼티가 person 에 있냐 없냐? = true or false
let result2 = "cat" in person;
console.log(result1, result2);
