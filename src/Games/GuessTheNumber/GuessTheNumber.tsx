import { useState } from "react";
import "./GuessTheNumber.css";

/** 
 * Gets a random whole number between min and max (both inclusive).
 */
function getRand(min: number, max: number) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GuessTheNumber(d: { back: React.MouseEventHandler<HTMLParagraphElement> }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const [num, setNum] = useState<number | null>(null);
    const [inp, setInput] = useState<number | null>(null);
    const [guesses, setGuesses] = useState(0);
    const [higher, setHigher] = useState(false);

    return (
        <div className="game">
            <p className="gameback" onClick={d.back}>{"<= Back to Games"}</p>
            <div className="guessthenumber">
                <div>
                    <label htmlFor="inputmin">Minimum: </label>
                    <input readOnly={num != null} id="inputmin" type="number" title="Minimum" placeholder="0" value={min} onChange={e => setMin(Number(e.target.value))}></input>
                </div>
                <div>
                    <label htmlFor="inputmax">Maximum: </label>
                    <input readOnly={num != null} id="inputmax" type="number" title="Maximum" placeholder="10" value={max} onChange={e => setMax(Number(e.target.value))}></input>
                </div>
                <br />
                {num == null && inp != null &&
                    <div>
                        <p>Good Job!  You guessed the correct number!</p>
                    </div>
                }
                {num == null && <button type="button" onClick={() => {
                    setNum(getRand(min, max));
                    setGuesses(0);
                }}>{inp != null ? "Play again" : "Start"}</button>}
                {num != null &&
                    <div>
                        <label htmlFor="u-input">Input: </label>
                        <input id="u-input" type="number" title="Input" placeholder="0" value={inp ?? 0} onChange={e => setInput(Number(e.target.value))}></input>
                    </div>
                }
                {num != null &&
                    <div>
                        <p>Guesses: {guesses}</p>
                        {guesses > 0 && <p>Wrong Guess ({higher ? "higher" : "lower"})</p>}
                    </div>
                }
                {num != null &&
                    <div>
                        <button type="button" onClick={() => {
                            setGuesses(guesses + 1);
                            if (inp == num) {
                                setNum(null);
                            } else {
                                setHigher((inp == null ? 0 : inp) < num);
                            }
                        }}>Guess</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default GuessTheNumber;
