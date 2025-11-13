import {CharacterCard} from "../CardCharacter/CharacterCard";
import { useCharacters } from "../../context/CharactersContext";
import './Characters.css'
import {Character} from "../../types/Character";

export const Characters = () => {
    const { characters } = useCharacters();
    if (!characters.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className="wrapper">
            <div className="characters">
                {characters.map((character: Character) => (
                    <CharacterCard character={character} key={character.id} />
                ))}
            </div>
        </div>
    )
}