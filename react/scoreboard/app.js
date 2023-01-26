const players = [
  {
    name: "Ash",
    score: 50,
    id: 1
  },
  {
    name: "Misty",
    score: 42,
    id: 2
  },
  {
    name: "Brock",
    score: 34,
    id: 3
  },
  {
    name: "Gary",
    score: 26,
    id: 4
  }
]

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

class Counter extends React.Component {

  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length}
      />

      {/* Players list */}
      {props.initialPlayers.map( player =>
        <Player 
          name={player.name} 
          score={player.score}
          key={player.id.toString()}
        />
      )}
    </div>
  );
}
      

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);