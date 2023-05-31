// removeItem.js

function removeItem(arr, item) {
  let newArr = [];
  for (const element of arr) {
    if (item !== element) {
      newArr.push(element);
    }
  }
  return newArr;
}

module.exports = removeItem;
