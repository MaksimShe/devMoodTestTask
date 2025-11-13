import { useEffect, useState } from "react";
import './Spells.css';
import {Loader} from "../Loader/Loader";
import {getSpells} from "../../api/apiRequest";

type Spell = {
    id: string;
    name: string;
    description: string;
};

export const Spells = () => {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const spellsApi: Spell[] = await getSpells();
            setSpells(spellsApi);
            setIsLoading(false);
        })();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (!spells) {
        return <div>Character not found</div>;
    }

    return (
        <div className='wrapperSpells'>
            <h1 className='spellsTitle'>Spells</h1>
            <h3 className='spellsDesc'>Discover the magical spells from the wizarding world</h3>
            <div className="spells">
                {spells.map(spell => (
                    <div key={spell.id} className="spell">
                        <h2 className='spellName'>{spell.name}</h2>
                        <span className='spellDesc'>{spell.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
