// 1. 제네릭이란?

// function wrap(value: any) {
//   return value;
// }

// const a = wrap("hello");
// const b = wrap(123);

// console.log(a, b);
// console.log(typeof a, typeof b);

// function wrap<T>(value: T): T {
//   return value;
// }

// const str = wrap("hello");
// const num = wrap(123);

// console.log(str, num);
// console.log(typeof str, typeof num);

// ------------------------------------------------------------------------

// 2. 제네릭 함수 구조 이해

// function 함수명<T>(매개변수: T): T {
//   return 매개변수;
// }
// U, K, V 도 사용 가능함.

// ------------------------------------------------------------------------

// 3. 제네릭 배열 타입

// function getFirst<T>(arr: T[]): T | undefined {
//   if (arr.length === 0) {
//     throw new Error("Array is empty");
//   }
//   return arr[0];
// }

// const numbers = [1, 2, 3];
// const names = ["Jonggu", "Choi"];

// console.log(getFirst(numbers));
// console.log(getFirst(names));

// 4. 제네릭 타입 제한 (extends)

// function printLength<T extends { length: number }>(value: T): void {
//   console.log(value.length);
// }

// printLength("hello");
// printLength([1, 2, 3]);
// printLength(42);

// T extends { length: number } → “length 속성이 있는 타입만 허용하겠다!”

// -------------------------------------------------------------------------

// 5. 제네릭 인터페이스

// interface Box<T> {
//   content: T;
//   label: string;
// }

// const stringBox: Box<string> = { content: "감자", label: "식재료" };
// const numberBox: Box<number> = { content: 123, label: "제품 코드" };

// console.log(stringBox);
// console.log(numberBox);

// -------------------------------------------------------------------------

// 6. 제네릭 여러 개 사용하기

// function merge<T, U>(a: T, b: U): T & U {
//   return { ...a, ...b };
// }

// const user = { name: "종찬" };
// const info = { age: 26 };
// const merged = merge(user, info);

// console.log(merge);
// console.log(merged.name, merged.age);
// console.log(merged.age);

// -------------------------------------------------------------------------

// 실습

function wrap<T>(value: T): T {
  return value;
}

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

const stringResponse: ApiResponse<string> = {
  data: "OK",
  status: 200,
};

const numberResponse: ApiResponse<number> = {
  data: 12345,
  status: 200,
};

function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

const merged = merge({ name: "종찬" }, { age: 26 });

console.log(wrap("Hello"));
console.log(getFirst(["apple", "banana"]));
printLength("타입스크립트");
printLength([1, 2, 3]);
console.log(stringResponse, numberResponse);
console.log(merged);
