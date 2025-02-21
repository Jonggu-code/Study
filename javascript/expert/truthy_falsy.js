// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;
// 위의 7가지의 값들은 조건문에서는 거짓으로 평가가 된다.

if (!f1) {
  // falsy한 값으로서 거짓으로 평가되기 때문에 not 을 만나서 결국 조건문이 참이됨
  console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지의 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
  //   if (person === undefined || person === null) {
  //     // Falsy를 이용하지 않을 시 조건문이 복잡해진다.
  //     console.log("person의 값이 없음");
  //     return;
  //   }
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "박종찬" };
printName(person);
