function getBMI(height, weight) {
  const h = height / 100;
  const bmi = weight / (h * h);
  if (bmi > 25) return "비만";
  else if (bmi > 24 && bmi <= 25) return "과체중";
  else if (bmi > 18.5 && bmi <= 25) return "정상";
  else return "저체중";
}
const result = getBMI(160, 50);
console.log(result);
