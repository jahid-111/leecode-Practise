/* Given an object or array obj, return a compact object.

  1.  A compact object is the same as the original object, except with keys containing falsy values removed.
    2.  This operation applies to the object and any nested objects.
      3.  Arrays are considered objects where the indices are keys.
        4.  A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 */

const compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(compactObject) // Recursively process each element
      .filter(Boolean); // Remove falsy elements
  }
  if (obj !== null && typeof obj === "object") {
    let result = {};
    for (let key in obj) {
      const value = compactObject(obj[key]);
      if (value) {
        result[key] = value;
      }
    }
    return result;
  } else {
    return obj;
  }
};

const obj = [null, 0, 5, [0], [false, 0, 10]];
const formData = {
  name: "Jahid",
  email: "",
  phone: null,
  address: {
    street: "",
    city: "Brahmabaria",
    zip: null
  }
};

// Output: {"b": [1]}


console.log(compactObject(formData));
