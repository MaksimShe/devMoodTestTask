import {CharacterCard} from "../CharacterCard/CharacterCard";
import {Character} from "../../types/Character";
import {useEffect, useState} from "react";
import {Loader} from "../Loader/Loader";
import './Characters.css'
import {getAllCharacters} from "../../api/apiRequest";

export const Characters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const charactersApi: Character[] = await getAllCharacters();
            setCharacters(charactersApi);
            setIsLoading(false);
        })();
    }, []);


    if (isLoading) {
        return <Loader />;
    }

    if (characters.length === 0) {
        return <p>Something wrong... API not responding</p>;
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