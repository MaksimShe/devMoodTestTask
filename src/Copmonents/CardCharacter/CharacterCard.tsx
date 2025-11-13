import {Character} from "../../types/Character";
import * as React from 'react';
import './CharacterCard.css';
import {NavLink} from "react-router";

type Props = {
    character: Character;
}

export const CharacterCard: React.FC<Props> = ({
    character
})=> {
    let personImg = '';
    if(!character.image) {
        personImg = '/noImg.png';
    } else {
        personImg = character.image;
    }
    return (
        <NavLink className='link' to={character.id}>
            <div className="characterCard">
                <img
                    className='photo'
                    src={personImg}
                    alt='person img'
                    width={200} />
                <h2 className='name' >{character.name || 'Unknown'}'</h2>
                <p className='house' >{character.house || 'Unknown'}</p>
            </div>
        </NavLink>

    )
}