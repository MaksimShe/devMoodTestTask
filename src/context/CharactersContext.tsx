// src/context/CharactersContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {Character} from "../types/Character";

export const CharactersContext = createContext<any>(null);

export const CharactersProvider = ({ children }: { children: React.ReactNode }) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        axios.get("https://hp-api.onrender.com/api/characters").then(res => {
            setCharacters(res.data);
        });
    }, []);

    return (
        <CharactersContext.Provider value={{ characters }}>
            {children}
        </CharactersContext.Provider>
    );
};

export const useCharacters = () => useContext(CharactersContext);
