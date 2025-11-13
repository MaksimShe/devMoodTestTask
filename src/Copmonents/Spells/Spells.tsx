import { useEffect, useState } from "react";
import axios from "axios";
import './Spells.css';

type Spell = {
    id: string;
    name: string;
    description: string;
};

export const Spells = () => {
    const [spells, setSpells] = useState<Spell[]>([]);

    useEffect(() => {
        axios.get("https://hp-api.onrender.com/api/spells").then(res => {
            setSpells(res.data);
        });
    }, []);

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
