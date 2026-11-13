import './App.css'

function App() {
    return (
        <main className="landing">
            <section className="hero-card" aria-labelledby="hero-title">
                <span className="status-badge">
                    <span className="status-indicator" aria-hidden="true" />
                    Pre-alpha · v0.3.1
                </span>
                <img className="logo" src="/logo.svg" alt="HTMOS" />
                <h1 id="hero-title">A New Digital Frontier</h1>
                <p className="intro">
                    An experimental operating system exploring a more open,
                    web-native computing experience.
                </p>
            </section>
            <section className="vision" aria-labelledby="vision-title">
                <div className="vision-heading">
                    <span className="section-label">The vision</span>
                    <h2 id="vision-title">A different kind of operating system</h2>
                    <p className="vision-intro">
                        Big ideas for a more open, capable computing experience.
                    </p>
                </div>
                <ul className="feature-list">
                    <li className="feature-card">
                        <span className="feature-number" aria-hidden="true">01</span>
                        <h3>Web, built in</h3>
                        <p>
                            HTML and JavaScript as native building blocks for
                            interfaces and apps—not just something in a browser.
                        </p>
                    </li>
                    <li className="feature-card">
                        <span className="feature-number" aria-hidden="true">02</span>
                        <h3>Boot with purpose</h3>
                        <p>
                            A baked-driver kernel is intended to streamline startup
                            and get the system ready faster.
                        </p>
                    </li>
                    <li className="feature-card">
                        <span className="feature-number" aria-hidden="true">03</span>
                        <h3>Your apps, your way</h3>
                        <p>
                            A compatibility layer is a goal for running apps made
                            for Windows, Linux, and macOS.
                        </p>
                    </li>
                </ul>
                <p className="project-note">
                    These are design goals, not features available in the current
                    pre-alpha. The BIOS bootloader currently supports 32- and
                    64-bit systems; native web support and app compatibility are
                    still part of the vision.
                </p>
            </section>
        </main>
    )
}

export default App
