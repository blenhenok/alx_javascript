0. 0-javascript_is_amazing.js
>Write a script that prints “JavaScript is amazing”:
>You must create a constant variable called myVar with the value “JavaScript is amazing”
>You must use console.log(...) to print all output
>You are not allowed to use var

1. 1-multi_languages.js
>Write a script that prints 3 lines:
>The first line: “C is fun”
>The second line: “Python is cool”
>The third line: “JavaScript is amazing”
>You must use console.log(...) to print all output
>You are not allowed to use var

2. 6-multi_languages_loop.js
>Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop
>The first line: “C is fun”
>The second line: “Python is cool”
>The third line: “JavaScript is amazing”
>You must use console.log(...) to print all output
>You are not allowed to use var
>You are not allowed to use any if/else statement
>You can use only one console.log
>You must use a loop (while, for, etc.)

3. 12-object.js
>Update this script to replace the value 12 with 89:
>You are not allowed to use var
#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
console.log(myObject);


4. 13-add.js
>Write a function that returns the addition of 2 integers.
>The function must be visible from outside
>The name of the function must be add
>You are not allowed to use var

5. 100-let_me_const.js
>Write a file that modifies the value of myVar to 333

6. 101-call_me_moby.js
>Write a function that executes x times a function.
>The function must be visible from outside
>Prototype: function (x, theFunction)
>You are not allowed to use var

7. 102-add_me_maybe.js
>Write a function that increments and calls a function.
>The function must be visible from outside
>Prototype: function (number, theFunction)
>You are not allowed to use var

8. 103-object_fct.js
>Update this script by adding a new function incr that increments the integer value.
>You are not allowed to use var
#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
