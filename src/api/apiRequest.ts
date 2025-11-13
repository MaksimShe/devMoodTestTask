import axios from "axios";
import { Spell } from "../types/Character";

const API_BASE = "https://hp-api.onrender.com/api";

export const getAllCharacters = async () => {
    const { data } = await axios.get(`${API_BASE}/characters`);
    return data;
};

export const getCharacterById = async (id: string) => {
    const { data } = await axios.get(`${API_BASE}/character/${id}`);
    return data[0];
};

export const getSpells = async (): Promise<Spell[]> => {
    const { data } = await axios.get(`${API_BASE}/spells`);
    return data;
};
