function getRandon(max) {
 return Math.floor(Math.random() * max);
}
console.log(getRandon(90));

const array = [];

for (let i = 1; i <= 90; i++) {
  array.push(i)
}
console.log(array);

for (let i = array.length; i > 0; i--) {
  let element = array.pop(i);
}
console.log(element);
