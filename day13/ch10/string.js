function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = sum(10, 20);
console.log("out : " + result); // out : 30

function sum(num1, num2) {
  return num1 + num2;
}
const result1 = sum(20, 20);
console.log("out : " + result1); // out : 30

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return; // 매개변수가 숫자가 아니면 강제 종료
  }
  return num1 + num2;
}
let result3 = sum("a", "b");
console.log("out : " + result3); // out : undefined
