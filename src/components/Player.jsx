import { useState } from "react"

export default function Player({ initalName, symbol, isActive }) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initalName)

    function handleEditClick () {
        setIsEditing((editing) => !isEditing)
    }

    function handleChange (e) {
        setPlayerName(e.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "SAVE" : "EDIT"}</button>
        </li>
    )
}