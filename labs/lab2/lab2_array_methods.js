/*
Purpose:
filter()
reduce()
map()
forEach()
search()
*/ 

const courses = ["COMP3122", "COMP3123", "COMP1230","Fash1011"]
console.log(courses[0][0])
const filteredCourses = courses.filter((course) => course[0] === "C")
console.log(filteredCourses)