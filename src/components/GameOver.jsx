const GameOver = ({ winner, onRestart }) => {
  return (
    <div className="game-over" id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>it&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>ReMatch?</button>
      </p>
    </div>
  );
};

export default GameOver;
