let result = 10 + "10";
console.log(result); // 1010

let num = 10;
let strNum = "10";
if (num == strNum) {
  // 문자열을 숫자형으로 형 변환
  console.log(`equals`);
}

let num1 = 10;
let strNum1 = "10";
if (String(num1) == strNum1) {
  console.log(`equals`);
}
