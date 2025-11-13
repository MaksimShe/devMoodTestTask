import axios from 'axios';

export const apiRequest = async () => {
    const apiUrlChar = 'https://hp-api.onrender.com/api/characters';
    const respChar = await axios.get(apiUrlChar);
    const characters = respChar.data;

    const apiUrlSpells = 'https://hp-api.onrender.com/api/spells';
    const respSpells = await axios.get(apiUrlSpells);
    const spells = respSpells.data;


    return { characters, spells };
};
