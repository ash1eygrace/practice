/*
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

// Convert the above into JSX: 

const title = <h1>My First React Element!</h1>;
const desc = <p>I just learned to create a React node and render it into the DOM.</p>;

const header = React.createElement(
    'header',
    null,
    title,
    desc
);
*/

// Embed JavaScript Expressions in JSX 

const title = 'My First React Element!';
const desc = 'I just learned to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const myName = 'Ashley';

const header = (
    <header>
        <h1 id={myTitleID}>{ title }</h1>
        <h2> { myName }'s learning stuff. </h2>
        <p>{ desc }</p>
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);