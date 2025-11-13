// src/App.tsx
import React from 'react';
import { SideBar } from "./Copmonents/SideBar/SideBar";
import { Route, Routes } from "react-router";
import { Characters } from "./Copmonents/Characters/Characters";
import './App.css';
import { CardDetails } from "./Copmonents/CardDetails/CardDetails";
import { CharactersProvider } from "./context/CharactersContext";
import {Spells} from "./Copmonents/Spells/Spells";

function App() {
    return (
        <CharactersProvider>
            <div className="App">
                <SideBar />
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={'a'} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/characters/:personId" element={<CardDetails />} />
                        <Route path="/spells" element={<Spells />} />
                    </Routes>
                </header>
            </div>
        </CharactersProvider>
    );
}

export default App;
