// 함수 표현식으로 정의된 함수 호이스팅
printHello();
var printHello = function printHello() {
  console.log("Hello");
  // 오류 발생 : printHello is not a function
};

// 실제로 실행되는 함수
var printHello;
printHello();
var printHello = function printHello() {
  console.log("Hello");
};
