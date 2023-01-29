

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
        <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        {props.name}
      </span>

      <Counter score={props.score}/>
    </div>
  );
}

const Counter = () => {
  const [score, setScore] = React.useState(0);

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  }
  
  const decrementScore = () => {
    setScore(prevScore => prevScore - 1);
  }

  return (
    <div className="counter">
      <button className="counter-action tdecrement" onClick={() => decrementScore()}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
    </div>
  );

}

class App extends React.Component {

  state = {
    players: [
      {
        name: "Ash",
        id: 1
      },
      {
        name: "Misty",
        id: 2
      },
      {
        name: "Brock",
        id: 3
      },
      {
        name: "Gary",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length}
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name} 
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            removePlayer = {this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}
      

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

