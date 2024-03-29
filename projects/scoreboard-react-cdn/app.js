

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

const App = () => {
  const [players, setPlayers] = React.useState([
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
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter( p => p.id !== id ));
  }

  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={players.length}
      />

      {/* Players list */}
      {players.map( player =>
        <Player 
          name={player.name} 
          id={player.id}
          score={player.score}
          key={player.id.toString()}
          removePlayer = {handleRemovePlayer}
        />
      )}
    </div>
  );
}
      

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

