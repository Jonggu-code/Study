const user = {
  name: "김철수",
  age: 25,
};

function updateUser(obj) {
  return { ...obj, age: 26 };
}

const updatedUser = updateUser(user);
console.log(user.age); // 25 (원본 객체는 변경되지 않음)
console.log(updatedUser.age); // 26 (새로운 객체 생성됨)
