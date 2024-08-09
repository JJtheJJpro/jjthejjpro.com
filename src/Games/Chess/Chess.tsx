import "./Chess.css";

export default function Chess(d: { back: React.MouseEventHandler<HTMLParagraphElement> }) {


    return (
        <div className="game">
            <p className="gameback" onClick={d.back}>{"<= Back to Games"}</p>
            
        </div>
    )
}