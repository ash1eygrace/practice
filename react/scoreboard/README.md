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

## Props

Props (properties) are used to customize Components and pass dynamic information into them. To use props you need to: 

1. Define the props in a components JSX tag using attribute syntax
2. Enable the use of props in a component  

Every React Component has a props object, if no props are passed when inspected using React Dev Tools the props object will be empty. Example: 

```
props
	new entry: ""
```

We can pass props to the Header through the JSX tax like so, and give by giving our function a parameter 

```js

const Header = (props) => { //give function props parameter
	return (
		<header>
			<h1>{ props.title }</h1>
			<span className="stats">{Players: props.totalPlayers }</span>
		</header>
	);
}

const App = () => {
	return (
		<div className="scoreboard">
			<Header 
			title="Scoreboard" 
			totalPlayers={1}/>  //passing props
			/>
		</div>
	);
}

  

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

```

Now when we check Chrome React Dev Tools we see props like so: 

```
props
	title: "Scoreboard"
	totalPlayers: 1
	newentry: ""
```

- props pass data from a parent component down to a child component
- parent component higher in the tree owns and controls the prop values
- props are immutable e.g. components can only read props never change them 
- if there is more than one prop add to separate lines for better readability
