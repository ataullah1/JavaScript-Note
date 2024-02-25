// console.log('=============');
function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const watch = stopWatch();
console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());
