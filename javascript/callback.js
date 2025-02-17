// function main(value) {
//   value();
// }

// function sub() {
//   console.log("i am sub");
// }

// main(sub); // callback 함수

// 화살표 함수 이용시
function main(value) {
  value();
}

main(() => {
  //   console.log("i am sub");
});

// 콜백 함수 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2); // repeatDouble 함수
});

repeat(5, (idx) => {
  console.log(idx * 3); // repeatTriple 함수
});
