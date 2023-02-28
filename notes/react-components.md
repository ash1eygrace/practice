Date: 2023-01-28
Tags: #treehouse-react #react #treehouse 

---


## React.memo

In react component re-render due to three reasons: 

1. There's an update in state 
2. An updated prop
3. The parent component re-rendered

A wasted render, for example, is when the state of one component lives in the main App component and when the state updated it causes React to re-render the main App component and every child of the main App regardless of if their prop has changed. 

React.memo can help stop re-renders of children when their parent is changed, as long as the child's prop hasn't changed. 

- [Beta  `React.memo` - React Docs](https://beta.reactjs.org/reference/react/memo)
- [`React.memo` - React Docs](https://reactjs.org/docs/react-api.html#reactmemo)
- [Use `React.memo()` wisely](https://dmitripavlutin.com/use-react-memo-wisely/)
- [How to stop re-rendering lists in React?](https://alexsidorenko.com/blog/react-list-rerender/)


## Component Patterns

### Destructuring Props

### Refs and the DOM 

- if something isn't being displayed to the DOM we don't want to use State because it causes a re-render. Instead use the useRef hook

---

Links: 
- https://teamtreehouse.com/library/react-components-2/react-update 
--- 