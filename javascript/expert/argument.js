// 구조 분해 할당?
// 배열이나 객체에 저장된 여러개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 기본
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 구조 분해 할당
let [one, two, three, four = 4] = arr; // 기본값 설정 가능

console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "박종찬",
  age: 27,
  hobby: "개발",
};

// 기본
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// 구조 분해 할당
let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
