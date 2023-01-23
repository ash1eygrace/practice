Date: 2023-01-22
Tags: #react #treehouse

---
These are notes from Treehouse's [React Basics course](https://teamtreehouse.com/library/react-basics-2) in their [Learn React track](https://teamtreehouse.com/tracks/learn-react)  

### What should be a component? 

>But how do you know what should be its own component? Use the same techniques for deciding if you should create a new function or object. One such technique is the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle), that is, a component should ideally only do one thing. **If it ends up growing, it should be decomposed into smaller subcomponents.**
> - https://reactjs.org/docs/thinking-in-react.html


### How to create a React Element: 

**React.createElement takes 3 arguments:**
1. **type** = usually a string like an h1
2. **object** = any attributes and values you want the element to have e.g. CSS id or class,   title. etc. (props)
3. **contents** = any children of the element any inner html text, null, other React Elements, etc. 

- **React does not create actual DOM notes. It creates JavaScript object representations of DOM nodes.**
- react


### Example of a React Element: 
```js
const title = React.createElement(
'h1', //type
{ id: 'main-title', title: 'This is a title.' }, // props
'My First React Element!' //inner HTML text node -- prop
);

console.log(title);
```
Example of above element via console:

<img width="602" alt="Pasted image 20230122100140" src="https://user-images.githubusercontent.com/29527450/214083812-df3d9eff-cd20-4197-abac-eee6b287fab6.png">


Example of how the above React node will be rendered in the DOM:
```html
<h1 id="main-title" title="This is a title.">My First React Element!</h1>
```


### How do you render a React Element to the DOM? 

[ReactDOM.render()](https://reactjs.org/docs/react-dom.html#render) is a method of the [ReactDOM package](https://reactjs.org/docs/react-dom.html) and is used to connect React to and display element in the DOM. React never touches the actual DOM directly, it just manages what gets rendered to the DOM and what gets updated via `ReactDOM.render();`. It's not until render that the browser creates actual DOM elements like the `<h1>`. It's render's job to interpret the element objects and create DOM nodes.

`ReactDOM.render()` accepts two arguments:
1. **React Element** JavaScript object that describes the element you will render.
2. **HTML element** you want to render the element inside of or mount the React Application. 


Example of rendering the above `title` Element:

```js
ReactDOM.render(
	title,
	document.getElementByID('app')
);
```

HTML looks like this:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Learning React Elements</title>
</head>

<body>
	<div id="app"> <!-- WHERE THE ELEMENT WILL DISPLAY--></div>

<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="./app.js"></script>

</body>

</html>
```

Any existing DOM elements inside the `<div id="root">` DOM Element will be replaced when render() is first called. 

### Render multiple Elements

```js
const title = React.createElement(
	'h1',
	{ id: 'main-title', title: 'This is a title.' },
	'My First React Element!'
);

const desc = React.createElement(
	'p',
	null,
	'I just learned to create a React node and render it into the DOM.'
);

const header = React.createElement(
	'header',
	null,
	title,
	desc
);
  
ReactDOM.render(
	header,
	document.getElementById('root')
);
```

Displays on page and in DOM as: 

<img width="671" alt="Pasted image 20230122114953" src="https://user-images.githubusercontent.com/29527450/214083872-625e2cad-07f1-4190-b28f-683406091dbe.png">


## JSX

Convert create Element to use JSX


```js
const title = React.createElement(
	'h1',
	{ id: 'main-title', title: 'This is a title.' },
	'My First React Element!'
);

const desc = React.createElement(
	'p',
	null,
	'I just learned to create a React node and render it into the DOM.'
);

const header = React.createElement(
	'header',
	null,
	title,
	desc
);
  
ReactDOM.render(
	header,
	document.getElementById('root')
);
```

Converts to

```jsx
const title = <h1>My First React Element!</h1> ;
const desc = <P>I just learned to create a React node and render it into the DOM.</p>
	  
```




Current position in course: https://teamtreehouse.com/library/react-basics-2/understanding-jsx 


## Resources
---

Links: 
- https://reactjs.org/docs/thinking-in-react.html
- [reactjs.org](https://reactjs.org/)

#### Recommended courses

-   [Object-Oriented JavaScript](https://teamtreehouse.com/library/objectoriented-javascript-2)
-   [JavaScript Array Iteration Methods](https://teamtreehouse.com/library/javascript-array-iteration-methods)
-   [Getting Started With ES2015](https://teamtreehouse.com/library/getting-started-with-es2015-2)

--- 
