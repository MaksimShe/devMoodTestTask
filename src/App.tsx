// src/App.tsx
import React from 'react';
import { SideBar } from "./copmonents/SideBar/SideBar";
import { Route, Routes } from "react-router";
import { Characters } from "./copmonents/Characters/Characters";
import './App.css';
import { CardDetails } from "./copmonents/CardDetails/CardDetails";
import { CharactersProvider } from "./context/CharactersContext";
import {Spells} from "./copmonents/Spells/Spells";
import {Home} from "./copmonents/Home/Home";

function App() {
    return (
        <CharactersProvider>
            <div className="App">
                <SideBar />
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/characters/:personId" element={<CardDetails />} />
                        <Route path="/spells" element={<Spells />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </header>
            </div>
        </CharactersProvider>
    );
}

export default App;
