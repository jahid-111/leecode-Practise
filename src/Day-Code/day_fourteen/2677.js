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

// For of loop

function chunkArrays(arr, size) {
  let chunked = [];
  let currentChunk = []; // [1,4,60,4,5]

  for (const element of arr) {
    currentChunk.push(element);

    if (currentChunk.length === size) {
      chunked.push(currentChunk);
      currentChunk = [];
    }
  }
  if (currentChunk.length > 0) {
    chunked.push(currentChunk);
    // console.log(chunked); //[52]
  }

  return chunked;
}
const jsonInput = "[1, 4, 60, 4, 5,6,3,2,52]";
const arr = JSON.parse(jsonInput);
const size = 2;

console.log(chunkArrays(arr, size));
// Output: [ [ 1, 4 ], [ 60, 4 ], [ 5, 6 ], [ 3, 2 ], [ 52 ] ]

// ======================
//----------------------------------------- Project Use Cases
// ======================

// --------------------- 1. Pagination (Frontend/React)

// const paginatedItems = chunkArrays(data, itemsPerPage);

// const items = [
//   /* large dataset */
// ];
// const pageSize = 10;
// const pages = chunkArrays(items, pageSize);

// // current page
// const currentPage = 1;
// const visibleItems = pages[currentPage - 1];

// --------------------- 2. Grid or Card Layouts
/* const rows = chunkArrays(cards, 3);

rows.map((row, index) => (
  <div className="row" key={index}>
    {row.map(card => <CardComponent key={card.id} {...card} />)}
  </div>
));
 */
