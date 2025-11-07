// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// const user: User = {
//   id: 1,
//   name: "Jonggu",
//   age: 26,
// };

// console.log(user);

// -------------------------------------------------------------------

// 2. 선택적 속성과 읽기 전용 속성

// interface Person {
//   name: string;
//   age?: number; // 선택적 속성 (있어도 되고 없어도 되고)
//   readonly id: number; // 읽기 전용 (한번 지정하면 수정 불가)
// }

// const person: Person = { name: "종찬", id: 101 };
// person.age = 26; // 가능
// // person.id = 200;      // 빨간줄(Error) : 읽기 전용 속성이라 수정 불가능

// console.log(person);

// -------------------------------------------------------------------

// 3. interface 확장하기 (extends)

// interface Animal {
//   name: string;
//   sound: string;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// // extends는 상속처럼 기존 속성을 모두 포함시킴.
// // 필요에 따라 새로운 속성 추가 가능

// const puppy: Dog = {
//   name: "Mong",
//   sound: "멍멍",
//   breed: "말티즈",
// };

// console.log(puppy);

// ----------------------------------------------------------------------

// 4. type alias (타입 별칭)
// - type은 타입에 이름을 붙이는 기능
// - 객체뿐 아니라 유니언, 기본 타입 조합도 표현 가능

// type ID = string | number;
// type UserStatus = "active" | "inactive";

// type User1 = {
//   id: ID;
//   name: string;
//   status: UserStatus;
// };

// const member: User1 = {
//   id: "abc123",
//   name: "종찬",
//   status: "active",
// };

// console.log(member);

// ------------------------------------------------------------------------

// 5. type 이랑 interface 같이 쓰기

// type Address = {
//   city: string;
//   zipCode: number;
// };

// interface User2 {
//   id: number;
//   name: string;
//   address: Address;
// }

// const user2: User2 = {
//   id: 1,
//   name: "Jonggu",
//   address: { city: "Seoul", zipCode: 12345 },
// };

// console.log(user2);

// --------------------------------------------------------------------------

// 6. 타입 확장 (& 연산자)

// type Animal = { name: string };
// type Dog = { sound: string };

// type DogInfo = Animal & Dog;

// const info: DogInfo = {
//   name: "Mong",
//   sound: "멍멍",
// };

// console.log(info);

// --------------------------------------------------------------------------

// 7. 실습

// 기본 인터페이스 정의
interface User {
  id: number;
  name: string;
  email?: string;
  readonly createAt: Date;
}

// 인터페이스 확장
interface Admin extends User {
  role: "admin" | "manager";
}

// 타입 별칭과 조합
type LoginResponse = {
  token: string;
  expires: string;
};

// 인터페이스 내부에서 타입 사용
interface LoggedUser extends User {
  loginInfo: LoginResponse;
}

// 실제 사용
const admin: Admin = {
  id: 1,
  name: "종찬",
  role: "admin",
  createAt: new Date(),
};

const loggedUser: LoggedUser = {
  id: 2,
  name: "gildong",
  email: "gildong@gpt.com",
  createAt: new Date(),
  loginInfo: {
    token: "abc123",
    expires: "2025-12-31",
  },
};

console.log(admin);
console.log(loggedUser);
