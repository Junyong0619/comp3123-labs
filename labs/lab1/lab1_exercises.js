/*
COMP 3123 - Full Stack Development
Lab Exercise 1 - JavaScript Refresher
Student: Junyong Choi (101539862)

Solved exercises: 2, 3, 4, 5
*/

// ============================================================
// Exercise 2: Find the largest of three given integers.
// ============================================================
function max(a, b, c) {
    if (a >= b && a >= c){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else {
        return c;
    }
}

console.log(max(1, 0, 1));        // expected: 1
console.log(max(0, -10, -20));    // expected: 0
console.log(max(1000, 510, 440)); // expected: 1000


// ============================================================
// Exercise 3: Move the last three characters to the start of
// a given string. The string length must be >= 3.
// ============================================================
function right(str) {
    if (str.length < 3){ 
        return str
    }
    let last3 = str.slice (-3)
    let rest = str.slice (0, -3)

    return last3 + rest; 
}

console.log(right("Python"));     // expected: honPyt
console.log(right("JavaScript")); // expected: iptJavaScr
console.log(right("Hi"));         // expected: Hi


// ============================================================
// Exercise 4: Find the type of a given angle.
// ============================================================
function angle_Type(angle) {
    if (angle > 0 && angle < 90){
        return "Acute angle"
    }else if(angle === 90){
        return "Right angle"
    }else if(angle > 90 && angle < 180){
        return "Obtuse angle"
    }else if(angle === 180){
        return "Straight angle"
    }else{
        return "Invalid angle"
    }
}

console.log(angle_Type(47));  // expected: Acute angle
console.log(angle_Type(90));  // expected: Right angle
console.log(angle_Type(145)); // expected: Obtuse angle
console.log(angle_Type(180)); // expected: Straight angle


// ============================================================
// Exercise 5: Maximum possible sum of k consecutive numbers
// in an array of positive integers.
// ============================================================
function array_max_sum(arr, k) {
    let maxsum = 0;

    for (let i = 0; i <= arr.length - k; i++){
        let sum = 0;

        for (let j = i; j < i + k; j++){
            sum = sum + arr[j];
        }
        if (sum > maxsum){
            maxsum = sum;
        }
    }

    return maxsum;
}

console.log(array_max_sum([1, 2, 3, 14, 5], 2)); // expected: 19
console.log(array_max_sum([2, 3, 5, 1, 6], 3));  // expected: 12
console.log(array_max_sum([9, 3, 5, 1, 7], 2));  // expected: 12
