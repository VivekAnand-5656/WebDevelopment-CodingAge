function flattenObject(obj) {
  let result = {};

  for (let key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      for (let innerKey in obj[key]) {
        result[key + "." + innerKey] = obj[key][innerKey];
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

// 🔍 Example Input
let user = {
  name: "Vivek",
  age: 21,
  address: {
    city: "Delhi",
    pin: 110001
  }
};

// ✅ Run
let flat = flattenObject(user);
console.log(flat);
