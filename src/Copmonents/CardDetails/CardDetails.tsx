import {Character} from "../../types/Character";
import {useParams} from "react-router";
import {useCharacters} from "../../context/CharactersContext";
import './CardDetails.css'


export const CardDetails = () => {
    const { characters } = useCharacters();
    const { personId } = useParams<{ personId: string }>();
    console.log(personId);
    const currentCharacter = characters.find((character: Character) => character.id === personId);

    return (
        <div className="cardDetails">
            <img className='imgDetails' src={currentCharacter.image} alt="CardImg" />
            <div className="cardMainInfo">
                <h1 className='nameDetails'>{currentCharacter.name}</h1>
                <p className='altNamesDetails'>Also known as: {currentCharacter.alternate_names.join(', ')}</p>
                <div>
                    {currentCharacter.wizard && <span className='uniqChar'>'Wizard'</span>}
                    {currentCharacter.hogwartsStudent && <span className='uniqChar'>'Hogward student'</span>}
                    {currentCharacter.hogwartsStaff && <span className='uniqChar'>'Hogward staff'</span>}
                    {currentCharacter.alive && <span className='uniqChar'>'Alive'</span>}
                </div>
                {/*<div className='charContainer'>*/}
                {/*    <p className='detailsField'>House:*/}
                {/*        <p className='detailsInfo'>{currentCharacter.house}</p>*/}
                {/*    </p>*/}
                {/*    <p className='detailsField'>Birth:*/}
                {/*        <p className='detailsInfo'>{currentCharacter.dateOfBirth}</p>*/}
                {/*    </p>*/}
                {/*    <p className='detailsField'>Actor:*/}
                {/*        <p className='detailsInfo'>{currentCharacter.actor}</p>*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}