import Games from "./Games/Games";
import Main from "./Home/Main";
import Monsters from "./Monsters/Monsters";
import { useState } from "react";
import "./App.css";

function Tab(d: { text: string, sel: boolean, onClick?: React.MouseEventHandler<HTMLParagraphElement> }) {
    if (d.sel) {
        return <p className="top" onClick={d.onClick}><u>{d.text}</u></p>
    }
    return <p className="top" onClick={d.onClick}>{d.text}</p>
}

function App() {
    const [page, setPage] = useState<"home" | "games" | "projs" | "monsters">("home");

    return (
        <div>
            <div className="top">
                <img className="top" src="favicon.ico" alt="JJ" />
                <Tab text="Home" sel={page == "home"} onClick={() => setPage("home")} />
                <Tab text="Games" sel={page == "games"} onClick={() => setPage("games")} />
                <Tab text="Projects" sel={page == "projs"} onClick={() => setPage("projs")} />
                <Tab text="Monsters" sel={page == "monsters"} onClick={() => setPage("monsters")} />
            </div>
            {page == "home" && <Main />}
            {page == "games" && <Games />}

            {page == "monsters" && <Monsters />}
        </div>
    )
}

export default App;