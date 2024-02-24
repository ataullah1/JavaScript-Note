function arg(a, b, c) {
  console.log(arguments);
  console.log([...arguments]);
}
arg(3, 4, 5, 6, 7, 8, 9);
