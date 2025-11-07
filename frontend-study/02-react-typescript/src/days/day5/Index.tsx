// 타입 좁히기 (Type Narrowing)

function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log('ID (문자열) : ', id.toUpperCase());
  } else {
    console.log('ID (숫자) : ', id.toFixed(2));
  }
}

// typeof를 이용한 기본 타입 좁히기

// in 연산자를 이용한 객체 타입 좁히기

interface Admin {
  name: string;
  privileges: string[];
}

interface User {
  name: string;
  email: string;
}

function describePerson(person: Admin | User) {
  if ('privileges' in person) {
    console.log(
      '관리자 : ',
      person.name,
      '| 권한 : ',
      person.privileges.join(', '),
    );
  } else {
    console.log('일반 유저 : ', person.name, '| 이메일 : ', person.email);
  }
}

// instanceof 를 이용한 클래스 타입 좁히기

class Dog {
  bark() {
    console.log('멍멍!');
  }
}

class Cat {
  meow() {
    console.log('야옹!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) animal.bark();
  else animal.meow();
}

// 사용자 정의 타입 가드 (User-Defined Type Guard)

interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) pet.swim();
  else pet.fly();
}

move({ swim: () => console.log('물살을 가르다 !') });
move({ fly: () => console.log('하늘을 날다 !') });

import React, { useEffect } from 'react';

const Index = () => {
  return <div></div>;
};

export default Index;
