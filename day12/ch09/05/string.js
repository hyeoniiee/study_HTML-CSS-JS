for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) break;
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
}
