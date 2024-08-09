import { useState } from "react";
import "./Games.css";
import GuessTheNumber from "./GuessTheNumber/GuessTheNumber";
import Chess from "./Chess/Chess";

function Games() {
    const [game, setGame] = useState<"guessthenumber" | "chess" | undefined>(undefined);

    if (game == "guessthenumber") {
        return <GuessTheNumber back={() => setGame(undefined)} />;
    } else if (game == "chess") {
        return <Chess back={() => setGame(undefined)} />;
    }

    return (
        <div className="games">
            <h1>Here are a list of games I not necessarily made but put on my website:</h1>
            <br />
            <h2 className="gameready" title="Guess the Number v1.0-Beta" onClick={() => setGame("guessthenumber")}>Guess the Number</h2>
            <br />
            <h2 className="gameinprogress" title="In Progress" onClick={() => setGame("chess")}>Chess</h2>
            <br />
            <h2 className="gamenotready" title="Not Ready">Go Fish</h2>
            <h2 className="gamenotready" title="Not Ready">Uno</h2>
        </div>
    )
}

export default Games
