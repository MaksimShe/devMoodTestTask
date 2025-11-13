import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {Character} from "../../types/Character";
import './CardDetails.css'
import {Loader} from "../Loader/Loader";
import {getCharacterById} from "../../api/apiRequest";

export const CardDetails = () => {
    const { personId } = useParams<{ personId: string }>();
    const [character, setCharacter] = useState<Character | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        (async () => {
            if (!personId) {
                return;
            }

            const characterApi: Character = await getCharacterById(personId);
            setCharacter(characterApi);
            setIsLoading(false);
        })();
    }, [personId]);

    if (isLoading) return <Loader />;

    if (!character) return <div>Character not found</div>;

    return (
        <div className="cardDetails">
            <img
                className='imgDetails'
                src={character.image || '/noImg.png'}
                alt={character.name + ' image'}
            />
            <div className="cardMainInfo">
                <h1 className='nameDetails'>{character.name}</h1>
                {character.alternate_names?.length > 0 &&
                    <p className='altNamesDetails'>
                        Also known as: {character.alternate_names.join(', ')}
                    </p>
                }
                <div>
                    {character.wizard &&
                        <span className='uniqChar'>
                            Wizard
                        </span>}

                    {character.hogwartsStudent &&
                        <span className='uniqChar'>
                            Hogwarts student
                        </span>}

                    {character.hogwartsStaff &&
                        <span className='uniqChar'>
                            Hogwarts staff
                        </span>}

                    {character.alive &&
                        <span className='uniqChar'>
                            Alive
                        </span>}
                </div>
                <div className='charContainer'>

                    {character.house &&
                        <p className='detailsField'>
                            House:
                            <span className='detailsInfo'>
                                {character.house}
                            </span>
                        </p>}

                    {character.dateOfBirth &&
                        <p className='detailsField'>
                            Birth:
                            <span className='detailsInfo'>
                                {character.dateOfBirth}
                            </span>
                        </p>}

                    {character.actor &&
                        <p className='detailsField'>
                            Actor:
                            <span className='detailsInfo'>
                                {character.actor}
                            </span>
                        </p>}
                </div>
            </div>
        </div>
    );
};
