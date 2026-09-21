# COMP 3123 - Full Stack Development

George Brown College - Fall 2026

**Student:** Junyong Choi
**Student ID:** 101539862

## GitHub Repository

https://github.com/Junyong0619/comp3123-labs

## Lab Exercise 1 - JavaScript Refresher

Location: [`labs/lab1/`](labs/lab1/)

| File | Description |
|---|---|
| `lab1_exercises.js` | Lab 1 exercise solutions (Exercises 2, 3, 4, 5) |
| `lab1_review.js` | In-class review: variables, objects, prototypes, classes |
| `lab1_review.html` | HTML page that loads `lab1_review.js` |
| `lab1_node.js` | Basic Node.js HTTP server on port 8088 |

### Exercises solved

| # | Problem | Function |
|---|---|---|
| 2 | Find the largest of three given integers | `max(a, b, c)` |
| 3 | Move the last three characters to the start of a string | `right(str)` |
| 4 | Find the type of a given angle | `angle_Type(angle)` |
| 5 | Maximum sum of k consecutive numbers in an array | `array_max_sum(arr, k)` |

### How to run

```bash
cd labs/lab1
node lab1_exercises.js
```

Expected output:

```
1
0
1000
honPyt
iptJavaScr
Hi
Acute angle
Right angle
Obtuse angle
Straight angle
19
12
12
```

## Lab Exercise 2 - ES6 Practice

Location: [`labs/lab2/`](labs/lab2/)

| File | Description |
|---|---|
| `lab2_exercises.js` | Lab 2 exercise solutions (Exercises 1-6) |
| `lab2_array_methods.js` | In-class practice: `filter()`, `map()`, `reduce()` |
| `lab2_promise.js` | In-class practice: creating and awaiting a Promise |
| `lab2_fetch_3rd_party.js` | In-class practice: `fetch()` from a third-party API |
| `lab2_promise.html` | HTML page that loads the in-class scripts |

### Exercises solved

| # | Problem | ES6 feature |
|---|---|---|
| 1 | Rewrite `gretter()` in ES6 | `const`, arrow function, template literal, `for...of` |
| 2 | `capitalize(str)` - upper-case the first letter | destructuring + spread |
| 3 | Capitalize every colour in an array | `Array.prototype.map` |
| 4 | Keep only values less than 20 | `Array.prototype.filter` |
| 5 | Sum and product of an array | `Array.prototype.reduce` |
| 6 | `Car` class and `Sedan` subclass | `class`, `extends`, `super` |

### How to run

```bash
cd labs/lab2
node lab2_exercises.js
```

Expected output:

```
Hello Randy Savage
Hello Ric Flair
Hello Hulk Hogan
Foobar
Nodejs
[ 'Red', 'Green', 'Blue' ]
[ 1, 5 ]
10
24
Model: Pontiac Firebird Engine 1976
Volvo SD has a balance of $30000.00
```
