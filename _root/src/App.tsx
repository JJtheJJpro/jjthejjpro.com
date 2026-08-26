// src/App.tsx
import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import Games from './routes/Games/Games';
import './App.css';

// SVG Icon Imports
import discordIcon from './assets/icons/discord.svg';
import githubIcon from './assets/icons/github.svg';
import twitterIcon from './assets/icons/twitter.svg';
import facebookIcon from './assets/icons/facebook.svg';

function AppContent() {
    const location = useLocation();
    const currentPath = location.pathname.replace('/', '') || 'home';

    return (
        <div className="app-layout" data-theme={currentPath}>
            {/* Deep Space Background Layer with Stars */}
            <div className="bg-gradient-layer">
                <div className="starfield" />
            </div>

            <header className="navbar-container">
                <nav className="nav-pills">
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'tab active home-tab' : 'tab')}>
                        Home
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'tab active projects-tab' : 'tab')}>
                        Projects
                    </NavLink>
                    <NavLink to="/games" className={({ isActive }) => (isActive ? 'tab active games-tab' : 'tab')}>
                        Games
                    </NavLink>
                </nav>
            </header>

            <main className="content-area">
                <div key={location.pathname} className="page-transition">
                    <Routes location={location}>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/games" element={<Games />} />
                    </Routes>
                </div>
            </main>

            <footer className="app-footer">
                <div className="social-links">
                    <a href="https://discord.gg/uB3yDDsKqD" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Discord">
                        <img src={discordIcon} alt="Discord" className="social-icon" />
                    </a>
                    <a href="https://github.com/JJtheJJpro" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://x.com/jjthejjpro" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                        <img src={twitterIcon} alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://facebook.com/JJtheJJpro" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                        <img src={facebookIcon} alt="Facebook" className="social-icon" />
                    </a>
                </div>
                <p className="footer-credits">
                    © JJtheJJpro {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}