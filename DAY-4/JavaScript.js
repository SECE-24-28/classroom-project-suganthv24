var arr = [10, 20, 30, 40, 50];

arr.push(60); // Adds 60 at the end
console.log(arr.toString());

arr.pop(); // Removes last element
console.log(arr.toString());

arr.shift(); // Removes first element
console.log(arr.toString());

delete arr[1]; // Deletes element at index 1 but the space remains
console.log(arr.toString());

arr.splice(1, 1); // Removes element from index given to number of elements given
console.log(arr.toString());

arr.splice(0, 0, 10); // Adds 10 at index 0 without removing any element
console.log(arr.toString());

arr.splice(2, 2, 90, 100); // replacing the elements
console.log(arr.toString());

let newArr = arr.slice(2, 4); // creates a new array from index 1 to 3
console.log(newArr.toString());


let combined = arr.concat(newArr); // combines two arrays
console.log("Combined Array: " + combined.toString());

console.log("Arr length: " + arr.length); // length of the array
console.log("NewArr length: " + newArr.length); // length of the new array
console.log("Combined length: " + combined.length); // length of the combined array