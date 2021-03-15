# Variable & Function Practice

## Practice

* Remix [the starter project](https://glitch.com/~variable-function-practice) so you have your own version
* Show index.html in a new window
* Open script.js & complete the exercises
* Check your solutions by viewing index.html

## Review

### Variables 

Variables store a single value, that can be changed by assigning it a new value.

```js
 /*-- keyword declaring a variable
 |
 |      /--- variable is named 'placeholder'
 |      |*/     
let placeholder; // variable is declared with no value
```

```js
 /*-- keyword declaring a variable
 |
 |      /--- variable is named 'className'
 |      |
 |      |          /--- variable is assigned a string value
 |      |          |*/
let className = "Code Nation Foundations";
```

### Functions

Functions perform an action

```js
 /*-- keyword to define a function
 |
 |           /-- function name is 'doSomething'
 |           |
 |           |       /-- empty parentheses mean no parameters
 |           |       |*/ 
function doSomething() {
  alert("Something!");
}
doSomething(); // calls the function with no arguments
```

They can optionally take parameters to change how they do the action

```js
 /*-- keyword to define a function
 |
 |           /-- function name is 'doSomething'
 |           |
 |           |       /-- parameters are listed between the parentheses
 |           |       |*/
function doSomething(something) {
  alert(`Doing something: ${something}`);
}
doSomething('wave'); // calls the function with argument 'wave'
                     // prints "Doing something: wave"
```

They can optionally return a value

```js
 /* -- keyword to define a function
 |
 |          /-- function name is 'doSomething'
 |           |
 |           |       /-- parameters are listed between the parentheses
 |           |       |*/
function doSomething(something) {
  alert(`Doing something and that something is...${something}`);
  return `Did ${something}`; 
}    /*        |
     |        \---- the value the function is returning
     | 
     \--- keyword says we're returning a value */

let result = doSomething('dance'); // calls the function with an argument
                                  // and stores the return value
console.log(result); // prints the returned value "Did dance"
```

### Scope
Variables with global scope are available inside all functions
```
// available everywhere
let sharedVariable = 1;
function logSharedVariable() {
  console.log(`sharedVariable value is ${sharedVariable}`);
}
logSharedVariable(); // prints "sharedVariable value is 1"
```

Variables with local scope are only available inside a function
```
// name available inside the function where it is declared
function logLocal1() {
  let name = 'Code';
  console.log(`name is ${name}`);
}
logLocal1(); // prints "name is Code"

function logLocal2() {
  let name = 'Nation';
  console.log(`name is ${name}`);
}
logLocal2(); // prints "name is Nation"

console.log(`name is ${name}`);
// prints "name is "
```

Variables with local scope take precedence over global variables
```
let name = 'Code';
function logLocal() {
  let name = 'Nation';
  console.log(`name is ${name}`);
}
logLocal(); // prints "name is Nation"

console.log(`name is ${name}`);
// prints "name is Code"
```


