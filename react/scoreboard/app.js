const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>

      <Counter score={props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
      </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={1}
      />

      {/* Players list */}
      <Player name="Ash" score={50}/>
      <Player name="Misty" score={42}/>
      <Player name="Brock" score={34}/>
      <Player name="Gary" score={26}/>
    </div>
  );
}
      

ReactDOM.render(
  <App />,
  document.getElementById('root')
);