import {Character} from "../../types/Character";
import * as React from 'react';
import './CharacterCard.css';
import {NavLink} from "react-router";

type Props = {
    character: Character;
}

export const CharacterCard: React.FC<Props> = ({
    character                                       // STATE NavLink
})=> {

    return (
        <NavLink className='link' to={character.id}>
            <div className="characterCard">
                <img
                    className='photo'
                    src={character.image || '/noImg.png'}
                    alt='person img'
                />
                <h2 className='name' >{character.name || 'Unknown'}</h2>
                <p className='house' >{character.house || 'Unknown'}</p>
            </div>
        </NavLink>

    )
}