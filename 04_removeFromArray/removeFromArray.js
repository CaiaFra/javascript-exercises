const removeFromArray = function(...args) {
  // Get the array to check from the arguments list
  const array = args[0];
  // Create a new empty array
  const newArray = [];
  // Go through every item in the array
  array.forEach((item) => {
    // Push every item into the new array UNLESS it's included in the function arguments
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
