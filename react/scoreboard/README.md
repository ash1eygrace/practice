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

React components are required to begin with an uppercase letter, and within `ReactDOM.render` the uppercase letter is required to differentiate custom Components to native DOM elements. 

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

## State

State is the data you want to track in your app. State is what allows you to create components that are dynamic and interactive, and it's the only data that changes over time.

- state is an object like props, but unlike props, which are immutable state can be changed change. Data from states is distributed through props. (https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
- states are only available to Class components
-  [Adding Local State to a Class – React docs](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
-  [Component State – React docs](https://reactjs.org/docs/faq-state.html)

Convert a function component to a Class component: 

```
const Counter = () => {
	return (	
		<div className="counter">		
			<button className="counter-action decrement"> - </button>			
			<span className="counter-score">34</span>
			<button className="counter-action increment"> + </button>
		</div>
	);
}
```

Converts to: 

```
class Counter extends React.Component {
	render() {
		return (	
		<div className="counter">		
			<button className="counter-action decrement"> - </button>			
			<span className="counter-score">this.props.score</span>
			<button className="counter-action increment"> + </button>
		</div>
		);
	}
}
```

- if a component is only receiving input from props it's best to use a functional component. 
- when you want to add state use a class component. 
- You can also use stateless class components 
- (determine what's best practice for the project you're working on)
- State updates may be asynchronous so to make sure state is updating correctly check the existing state before updating using prevState

There are two main types of state when creating a React app: 

1. Application state: is the main state we think about. It's the Data that is available to the entire application. In the scoreboard application, all of our Application State lives in the App component and all of its child components have access to it. 
3. Component state: The counter component has state that's not shared outside of it, which is local component state. That state is required for only that component to do its job. 
