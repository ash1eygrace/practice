## JavaScript - Objects and Object Constructors
---

Date: 2022-07-05
Tags: [[Archives/JavaScript - Design Patterns]] [[Javascript]] [[The Odin Project]]

---
## Introduction: 
-   Most cases it’s best to use **object literal** syntax as follows: 

```javascript
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    // do stuff!
 }
}```

- Two ways to get informatoin from an object dot notation and bracket notation: 

``` javascript
// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function]
```

- dot notation is cleaner and preferred but some times it won't work because the property of an object is a string with space in it e.g. `myObject."obnoxious property"` 
- You cannot use variables in dot notation:
```javascript
const variable = 'property'

myObject.variable // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable] // this is equivalent to myObject['property'] and returns 'Value!'
```

### Learning outcomes
- Write an object constructor and instantiate the object.
- Describe what a prototype is and how it can be used.
- Explain prototypal inheritance.
- Understand the basic do’s and don’t’s of prototypical inheritance.
- Explain what `Object.create` does.
- Explain what the `this` keyword is. 


## Object as a Design Pattern
- one of the simpilest ways to organize your code is to group things into objects.

### Tic Tac Toe Example: 

```javascript
// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"
```

```javascript
// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}
``` 

- Using the object gives you a few benefits: 
	1. You can get all the playes names or markers without having to memorize the variable names like `console.log(playerOneName)`, `console.log(playertwoMarker)` etc using dotnotation:
		```javascript
	function printName(player) {
	  console.log(player.name)
	}
```
	2. And if you don't know which player name to print the object makes it that much easier: 
	```javascript
	function gameOver(winningPlayer){
	  console.log("Congratulations!")
	  console.log(winningPlayer.name + " is the winner!")
	}
```
	3. Then if you're needing to create a shop with large inventory using an opbject to keep track of names, price, descriptions and other things is the option you want! 
	4. But manually typing out the contents of the objects isn't feasible and we need a cleaner way to create obkects which brings us to Object Constructors

### Object Constructors: 

When you have a specific object that needs to be duplicate an object constructor is a better way than manually creating them all. Examples: 

```javascript
function Player(name, marker) {
  this.name = name
  this.marker = marker
}
```

You can call the function above using the keyword `new`:
```javascript
const player = new Player('ash', 'X')
console.log(player.name) // 'ash'
```

Just like objects created with Object Literal methods you can add fucntions to the object: 
```javascript
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function() {
    console.log(name)
  }
}

const player1 = new Player('ash', 'X')
const player2 = new Player('also ash', 'O')
player1.sayName() // logs 'ash'
player2.sayName() // logs 'also ash'
```


--- 

### [Exercise](https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors#exercise)
#### Instructions: 
Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s `title`, `author`, the number of `pages`, and whether or not you have `read` the book.

Put a function into the constructor that can report the book info like so:

```javascript
theHobbit.blogDetails() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
```

Note: It is almost _always_ best to `return` things rather than putting `console.log()` directly into the function. In this case, return the `info` string and log it after the function has been called:

```javascript
console.log(theHobbit.info());
```

___

#### My Solution:
The object, with the properyt keypairs, plus a functions that returns the bookDetails.
```JavaScript
function Book(title, author, pages, tbr, rating) {
	this.title = title
	this.author = author
	this.pages = pages
	this.tbr = tbr
	this.rating = rating
	this.bookDetails = function() {
		return `${title} by ${author}, ${pages} pages, ${tbr}, ${rating} stars`
	}
}
```

The constructor, to create a new Book object named dune.

```javascript
const dune = new Book('Dune', 'Frank Herbert', '400', 'read', '5')
```

Call to the Dune object's bookDetails to display the sting in console. 

```javascript
console.log(dune.bookDetails());
``` 

___

TIL about object prototypes chaining/inheritence. If an inherited function is executed in an object prototype that returns `this` , the value of `this` points to the very first object (inheriting object) that invoked that function not the prototype object. 


---

Links: 
- https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors#objects-as-a-design-pattern  