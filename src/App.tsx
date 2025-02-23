import { BrowserRouter, Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Games from './Games/Games';
import Monsters from './Monsters/Monsters';
import MonstersCSS from './Monsters/Monsters.css?raw';
import HomeCSS from './Home/Home.css?raw';
import ProjectsCSS from './Projects/Projects.css?raw';

function Navigation() {
    const navigate = useNavigate();
    const [page, setPage] = useState<'home' | 'projects' | 'games' | 'monsters'>('home');

    const location = useLocation();
    useEffect(() => {
        let style = document.createElement('style');

        if (location.pathname === '/monsters') {
            setPage('monsters');
            style.innerHTML = MonstersCSS;
        } else if (location.pathname === '/projects') {
            setPage('projects');
            style.innerHTML = ProjectsCSS;
        } else if (location.pathname === '/games') {
            setPage('games');
            //style.innerHTML = GamesCSS;
            style.innerHTML = HomeCSS;
        } else {
            setPage('home');
            style.innerHTML = HomeCSS;
        }

        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [location]);

    return (
        <nav className='topbar'>
            <button type='button' className={`topbar home${page == 'home' ? " selected" : ""}`} onClick={() => {
                navigate("/");
            }}>Home</button>
            <button type='button' className={`topbar projects${page == 'projects' ? " selected" : ""}`} onClick={() => {
                navigate("/projects");
            }}>Projects</button>
            <button type='button' className={`topbar games${page == 'games' ? " selected" : ""}`} onClick={() => {
                navigate("/games");
            }}>Games</button>
            <button type='button' className={`topbar monsters${page == 'monsters' ? " selected" : ""}`} onClick={() => {
                navigate("/monsters");
            }}>Monsters</button>
        </nav>
    )
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/monsters" element={<Monsters />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
