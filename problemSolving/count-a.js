let text = 'amar sonar bangla ami atomay vlobashi';

let count = 0;

for (let i = 0; i < text.length; i++) {
  const element = text[i];
  if (element === 'a') {
    count++;
  }
}
console.log(count);

const aaa = 'Amar sonar bAnglAaa ami tomAy ValobAshi';

let counta = 0;
for (let i = 0; i < aaa.length; i++) {
  const element = aaa[i];
  if (element === 'a' || element === 'A') {
    counta++;
  }
}
console.log(counta);
