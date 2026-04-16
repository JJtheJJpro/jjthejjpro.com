import { BrowserRouter, Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Games from './Games/Games';
import Monsters from './Monsters/Monsters';

function Navigation() {
    const navigate = useNavigate();
    const [page, setPage] = useState<'home' | 'projects' | 'games' | 'monsters'>('home');

    const location = useLocation();
    useEffect(() => {
        let style = document.createElement('style');

        if (location.pathname === '/monsters') {
            setPage('monsters');
        } else if (location.pathname === '/projects') {
            setPage('projects');
        } else if (location.pathname === '/games') {
            setPage('games');
        } else {
            setPage('home');
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
        </nav>
    )
    //<button type='button' className={`topbar monsters${page == 'monsters' ? " selected" : ""}`} onClick={() => {
    //            navigate("/monsters");
    //        }}>Monsters</button>
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
