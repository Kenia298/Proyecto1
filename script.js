let words = ["1", "Apple", "2", "Microsoft", "3", "Google"];
let numbers = [-12, 5, 32, 2, -5, 15];

words.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
}
);
console.log(words);
console.log(numbers);