import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleEdit = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editableName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';
  if (isEditing) {
    editableName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{btnCaption}</button>
      </span>
    </li>
  );
};

export default Player;
