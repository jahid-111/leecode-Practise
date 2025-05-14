function chunkArray(arr, size) {
  if (!Array.isArray(arr) || typeof size !== "number" || size <= 0) {
    throw new Error("Invalid input");
  }

  const chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }

  return chunked;
}

const jsonInput = "[1, 4, 60, 4, 5]";
const arr = JSON.parse(jsonInput);
const size = 1;

console.log(chunkArray(arr, size));
// Output: [ [1, 2, 3], [4, 5, 6], [7] ]
