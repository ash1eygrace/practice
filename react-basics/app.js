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
*/

// Convert the above into JSX 
const title = <h1>My First React Element!</h1>;
const desc = <p>I just learned to create a React node and render it into the DOM.</p>;

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