function multBy3(nums) {
  let newNums = nums.map(elem => elem * 3);
  return newNums;
}

function concat(strs) {
  let str = strs.reduce((prev, elem) => prev + elem);
  return str;
}

console.log(multBy3([1, 2, 3, 4, 5]));
console.log(concat(["a", "b", "c", "d", "e"]));
