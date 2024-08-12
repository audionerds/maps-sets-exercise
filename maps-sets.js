//Q1
new Set([1, 1, 2, 2, 3, 4]);

{
  1, 2, 3, 4;
} //set only stores unique objects

//Q2
[...new Set("referee")].join("");
//new set = {'r','e','f'}
// spread turns back in to an array and join("") concatentates elements into a single string
("ref");

//Q3
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// Map {[1, 2, 3] => true, [1, 2, 3] => false} (2)

//Q4
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//Q5
function vowelCount(str) {
  const vowels = "aeiou";
  const vowelMap = new Map();

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}
