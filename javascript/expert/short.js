// 단락 평가란?
// and 나 or 같은 논리연산식에서 첫번째 피연산자의 값 만으로도 해당 연산의 결과를 확정할 수 있다면 두번째 피연산자의 값에는 아예 접근하지 않는 Javascript 의 특징

// 예시문
let varA = false;
let varB = true;

// And 연산자
console.log(varA && varB);
// And 연산에서 첫번째 값이 false 이기 때문에 논리연산 결과는 무조건 false 가 나온다.

// OR 연산자
console.log(varB || varA);
// Or 연산에서 첫번째 값이 true 이기 때문에 논리연산 결과는 무조건 True 이다.

// 단락 평가를 이용하면 조건문을 이용하지 않아도 특정 상황에서 어떤 함수를 호출하지 않도록 방지하거나, 어떠한 값들을 굳이 계산하지 않도록 제한하는 등의 다양한 기능을 개발할 수 있음.

// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }
// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// console.log(returnFalse() && returnTrue());
// // 선 입력이 false이기 때문에 뒷 피연산자를 호출 할 필요가 없음. 어차피 false이기 때문에 단락평가가 적용된다.

// console.log(returnTrue() && returnFalse());
// // 선 입력이 true 이기 때문에 뒷 피연산자까지 호출해서 확인함.

// console.log(returnTrue() || returnFalse());
// // 선 입력이 true 이기 때문에 뒷 피연산자가 뭐가 나오든 어차피 true 이다. 따라서 단락평가가 적용된다.

// 단락 평가 활용 사례

// function printName(person) {
//   if (!person) {
//     console.log("person에 값이 없음");
//     return;
//   }

//   console.log(person.name);
// }

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "박종찬" });
