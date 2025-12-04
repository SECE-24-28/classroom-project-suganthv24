var object = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("Name: " + object.name); // Accessing property using dot notation
console.log("Age: " + object["age"]); // Accessing property using bracket notation  
console.log("City: " + object.city);
console.log("Object before modification: ", object);

object.age = 31; // Modifying existing property
object.country = "USA"; 
console.log("Object after modification: ", object);// Adding new property

delete object.city; // Deleting a property
console.log("Object after deleting city: ", object);

// Iterating over object properties
for (var key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key + ": " + object[key]);
    }
}

// Nested Object
var student = {
    name: "Alice",  
    age: 22,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        state: "CA"
    },
    courses: ["Math", "Science", "History"]
};
console.log("Student Name: " + student.name);
console.log("Student City: " + student.address.city);
console.log("Student Courses: " + student.courses.join(", "));

//using some() to check if any course is 'Math'
var hasMathCourse = student.courses.some(function(course) {
    return course === "Math";
});
console.log("Has Math Course: " + hasMathCourse);

//use foreaach to print courses
student.courses.forEach(function(course, index) {
    console.log("Course " + (index + 1) + ": " + course);
});

//use map to create a new array with course name lengths
var courseNameLengths = student.courses.map(function(course) {
    return course.length;
});
console.log("Course Name Lengths: " + courseNameLengths.join(", "));

//use filter to get courses with name length greater than 5
var longCourses = student.courses.filter(function(course) {
    return course.length > 5;
});
console.log("Long Courses: " + longCourses.join(", "));

//use every to check if all courses have name length greater than 3
var allLongerThanThree = student.courses.every(function(course) {
    return course.length > 3;
});
console.log("All Longer Than Three: " + allLongerThanThree);