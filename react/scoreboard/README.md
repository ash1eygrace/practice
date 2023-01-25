Notes from: https://teamtreehouse.com/library/react-basics-2 

## Thinking in Components: 

[Break The UI Into A Component Hierarchy](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy) 

Creating a React Component is two-step: 
1. Define component as a JS function or class 
2. Use or display the component in UI with JSX tag

```js
const Header = () {
return (
	<header>	
		<h1>Scoreboard</h1>		
		<span className="stats">Players: 1</span>	
	</header>
	);
} 

ReactDOM.render(
	<Header />,
	document.getElementById('root')
);

```

React components are required to begin with an uppercase letter, and within `ReactDOM.render` the capitol letter is required to differentiate custom Components to native DOM elements. 

To display nested components inside of the header you'd use syntax like:

```js
ReactDOM.render(
	<Header> 
		// your component inside the header here. 
	</Header>
	document.getElementById('root')
);
```

 ``<Header />`` is a function call to `React.createElement`  (babeljs.io) e.g.: 

```js
ReactDOM.render(
	<Header />,
	document.getElementById('root')
);
// is actually:
ReactDOM.render(
	React.createElement(Header, null),
	document.getElementById("root")
);



```

### Components as Arrow Functions

It's common to see components defined as arrow functions. 

Header function declaration: 
```js 
const Header() {
return (
	<header>	
		<h1>Scoreboard</h1>		
		<span className="stats">Players: 1</span>	
	</header>
	);
} 
```
converted to an arrow function expression: 
```js 
const Header = () => (
	<header>	
		<h1>Scoreboard</h1>		
		<span className="stats">Players: 1</span>	
	</header>
);
```

- When a component contains other components, it's called composition
- Typically React apps have a single top level component that wraps the entire application and composes all the main components together e.g. 
```js
const App = () => {
	return (
		<div className="myApp">
			// all components 
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
```

