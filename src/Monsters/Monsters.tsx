import mqtt from "async-mqtt";
import { useEffect, useState } from "react";
import "./Monsters.css";

const wss = 'wss://broker.hivemq.com:8884/mqtt';

function Monsters() {
    const [connectState, setConnectState] = useState("Listening for host...");
    const [cmdSend, setCmdSend] = useState("");
    const [monsterNames, setMonsterNames] = useState(["Monster 1",
        "Monster 2",
        "Monster 3",
        "Monster 4",
        "Monster 5",
        "Monster 6",
        "Monster 7",
        "Monster 8",
        "Monster 9",
        "Monster 10"]);
    const [connected, setConnected] = useState(false);
    const [actType, setInput] = useState<0 | 1>(1); // 0 - keyboard, 1 - GUI
    const [activeMonsters, setActiveMonsters] = useState([...Array(32)].map(() => false));
    const [keyLastPressed, setKeyLastPressed] = useState<string | null>(null);

    let MQTT: mqtt.AsyncMqttClient | undefined = undefined;

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        const msgl = (_: string, payload: Buffer) => {
            let pl = payload.toString();
            if (pl.startsWith('server ')) {
                switch (pl.replace('server ', '')) {
                    case "subconnected":
                        setConnected(false);
                        setConnectState("Host Connected.  Waiting for Arduino connection...");
                        break;
                    case "connecting":
                        setConnectState("Arduino detected.  Connecting...");
                        break;
                    case "connected":
                        setConnected(true);
                        setConnectState("Arduino connected!");
                        break;
                    case "close":
                        setConnected(false);
                        setConnectState("Listening for host...");
                        break;
                    default:
                        console.log(`unknown server cmd: '${pl.replace('server ', '')}'`)
                        break;
                }
            }
        };

        mqtt.connectAsync(wss).then(v => {
            if (v.connected) {
                MQTT = v;
                MQTT.on('message', msgl);
                MQTT.subscribe('jj-monster-controller-mega-2341-0042');
            }
        }, rej => {
            console.error(rej);
            setConnectState(`Listening for host...(error: "${rej}")`);
        });

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            if (MQTT && MQTT.connected) {
                MQTT.off('message', msgl);
                MQTT.unsubscribe('jj-monster-controller-mega-2341-0042');
            }
        };
    }, [connected, actType, keyLastPressed]);

    function handleKeyDown(e: KeyboardEvent) {
        if (connected && actType == 0 && keyLastPressed != e.code) {
            setKeyLastPressed(e.code);

            let t = activeMonsters;
            switch (e.code.replace("Key", "").replace("Digit", "")) {
                case "1":
                    t[0] = true;
                    setActiveMonsters([...t]);
                    send("101");
                    break;
                case "2":
                    t[1] = true;
                    setActiveMonsters([...t]);
                    send("102");
                    break;
                case "3":
                    t[2] = true;
                    setActiveMonsters([...t]);
                    send("103");
                    break;
                case "4":
                    t[3] = true;
                    setActiveMonsters([...t]);
                    send("104");
                    break;
                case "5":
                    t[4] = true;
                    setActiveMonsters([...t]);
                    send("105");
                    break;
                case "6":
                    t[5] = true;
                    setActiveMonsters([...t]);
                    send("106");
                    break;
                case "7":
                    t[6] = true;
                    setActiveMonsters([...t]);
                    send("107");
                    break;
                case "8":
                    t[7] = true;
                    setActiveMonsters([...t]);
                    send("108");
                    break;
                case "9":
                    t[8] = true;
                    setActiveMonsters([...t]);
                    send("109");
                    break;
                case "0":
                    t[9] = true;
                    setActiveMonsters([...t]);
                    send("110");
                    break;
                case "Q":
                    t[10] = true;
                    setActiveMonsters([...t]);
                    send("111");
                    break;
                case "W":
                    t[11] = true;
                    setActiveMonsters([...t]);
                    send("112");
                    break;
                case "E":
                    t[12] = true;
                    setActiveMonsters([...t]);
                    send("113");
                    break;
                case "R":
                    t[13] = true;
                    setActiveMonsters([...t]);
                    send("114");
                    break;
                case "T":
                    t[14] = true;
                    setActiveMonsters([...t]);
                    send("115");
                    break;
                case "Y":
                    t[15] = true;
                    setActiveMonsters([...t]);
                    send("116");
                    break;
                case "U":
                    t[16] = true;
                    setActiveMonsters([...t]);
                    send("117");
                    break;
                case "I":
                    t[17] = true;
                    setActiveMonsters([...t]);
                    send("118");
                    break;
                case "O":
                    t[18] = true;
                    setActiveMonsters([...t]);
                    send("119");
                    break;
                case "P":
                    t[19] = true;
                    setActiveMonsters([...t]);
                    send("120");
                    break;
                case "A":
                    t[20] = true;
                    setActiveMonsters([...t]);
                    send("121");
                    break;
                case "S":
                    t[21] = true;
                    setActiveMonsters([...t]);
                    send("122");
                    break;
                case "D":
                    t[22] = true;
                    setActiveMonsters([...t]);
                    send("123");
                    break;
                case "F":
                    t[23] = true;
                    setActiveMonsters([...t]);
                    send("124");
                    break;
                case "G":
                    t[24] = true;
                    setActiveMonsters([...t]);
                    send("125");
                    break;
                case "H":
                    t[25] = true;
                    setActiveMonsters([...t]);
                    send("126");
                    break;
                case "J":
                    t[26] = true;
                    setActiveMonsters([...t]);
                    send("127");
                    break;
                case "K":
                    t[27] = true;
                    setActiveMonsters([...t]);
                    send("128");
                    break;
                case "L":
                    t[28] = true;
                    setActiveMonsters([...t]);
                    send("129");
                    break;
                case "Semicolon":
                    t[29] = true;
                    setActiveMonsters([...t]);
                    send("130");
                    break;
                case "Space":
                    t[30] = !t[30];
                    setActiveMonsters([...t]);
                    send(`${t[30] ? '1' : '0'}31`);
                    break;
                case "Period":
                    t[31] = true;
                    setActiveMonsters([...t]);
                    send("132");
                    break;
                default:
                    break;
            }
        }
    }
    function handleKeyUp(e: KeyboardEvent) {
        if (connected && actType == 0) {
            setKeyLastPressed(null);

            let t = activeMonsters;
            switch (e.code.replace("Key", "").replace("Digit", "")) {
                case "1":
                    t[0] = false;
                    setActiveMonsters([...t]);
                    send("001");
                    break;
                case "2":
                    t[1] = false;
                    setActiveMonsters([...t]);
                    send("002");
                    break;
                case "3":
                    t[2] = false;
                    setActiveMonsters([...t]);
                    send("003");
                    break;
                case "4":
                    t[3] = false;
                    setActiveMonsters([...t]);
                    send("004");
                    break;
                case "5":
                    t[4] = false;
                    setActiveMonsters([...t]);
                    send("005");
                    break;
                case "6":
                    t[5] = false;
                    setActiveMonsters([...t]);
                    send("006");
                    break;
                case "7":
                    t[6] = false;
                    setActiveMonsters([...t]);
                    send("007");
                    break;
                case "8":
                    t[7] = false;
                    setActiveMonsters([...t]);
                    send("008");
                    break;
                case "9":
                    t[8] = false;
                    setActiveMonsters([...t]);
                    send("009");
                    break;
                case "0":
                    t[9] = false;
                    setActiveMonsters([...t]);
                    send("010");
                    break;
                case "Q":
                    t[10] = false;
                    setActiveMonsters([...t]);
                    send("011");
                    break;
                case "W":
                    t[11] = false;
                    setActiveMonsters([...t]);
                    send("012");
                    break;
                case "E":
                    t[12] = false;
                    setActiveMonsters([...t]);
                    send("013");
                    break;
                case "R":
                    t[13] = false;
                    setActiveMonsters([...t]);
                    send("014");
                    break;
                case "T":
                    t[14] = false;
                    setActiveMonsters([...t]);
                    send("015");
                    break;
                case "Y":
                    t[15] = false;
                    setActiveMonsters([...t]);
                    send("016");
                    break;
                case "U":
                    t[16] = false;
                    setActiveMonsters([...t]);
                    send("017");
                    break;
                case "I":
                    t[17] = false;
                    setActiveMonsters([...t]);
                    send("018");
                    break;
                case "O":
                    t[18] = false;
                    setActiveMonsters([...t]);
                    send("019");
                    break;
                case "P":
                    t[19] = false;
                    setActiveMonsters([...t]);
                    send("020");
                    break;
                case "A":
                    t[20] = false;
                    setActiveMonsters([...t]);
                    send("021");
                    break;
                case "S":
                    t[21] = false;
                    setActiveMonsters([...t]);
                    send("022");
                    break;
                case "D":
                    t[22] = false;
                    setActiveMonsters([...t]);
                    send("023");
                    break;
                case "F":
                    t[23] = false;
                    setActiveMonsters([...t]);
                    send("024");
                    break;
                case "G":
                    t[24] = false;
                    setActiveMonsters([...t]);
                    send("025");
                    break;
                case "H":
                    t[25] = false;
                    setActiveMonsters([...t]);
                    send("026");
                    break;
                case "J":
                    t[26] = false;
                    setActiveMonsters([...t]);
                    send("027");
                    break;
                case "K":
                    t[27] = false;
                    setActiveMonsters([...t]);
                    send("028");
                    break;
                case "L":
                    t[28] = false;
                    setActiveMonsters([...t]);
                    send("029");
                    break;
                case "Semicolon":
                    t[29] = false;
                    setActiveMonsters([...t]);
                    send("030");
                    break;
                case "Period":
                    t[31] = false;
                    setActiveMonsters([...t]);
                    send("032");
                    break;
                default:
                    break;
            }
        }
    }

    async function sendcmd() {
        MQTT?.publish('jj-monster-controller-mega-2341-0042', `client ${cmdSend}`);
    }

    async function send(data: String) {
        MQTT?.publish('jj-monster-controller-mega-2341-0042', `client ${data}`);
    }

    /**
     * @param type 0 (P), 1 (A), 2 (X)
     * @param num monster number
     * @param on true for on, false for off
     */
    function parseMonster(type: 0 | 1 | 2, num: number, on: boolean) {
        if (num < 1 || num > 10) {
            if (num == 31 || num == 32) {
                send(`${on ? 1 : 0}${num}`);
                return;
            }
            console.error(`monster number must be between 1 and 10 or 31 or 32 (received ${num})`);
            return;
        }
        else if (type == 1) {
            num += 10;
        }
        else if (type == 2) {
            num += 20;
        }
        send(`${on ? 1 : 0}${num < 10 ? "0" : ""}${num}`);
    }

    return (
        <div className="monsters">
            <div className="com">
                <p>{connectState}</p>
                <input title="Command to send to arduino" placeholder="Put custom command here" type="text" value={cmdSend} onChange={e => setCmdSend(e.target.value)} onKeyDown={e => {
                    if (e.code == "Enter") {
                        sendcmd();
                    }
                }}></input>
                <button type="button" onClick={sendcmd}>Send</button>
            </div>

            <table className={connected && actType == 1 ? "" : "disabled"}>
                <thead>
                    <tr>
                        {monsterNames.map((name, i) => (
                            <th className={i == 0 ? "l" : i == 9 ? "r" : ""} key={i} title={`Double click to change the name of ${name}`} onDoubleClick={() => {
                                let input = prompt("Enter in a new monster name", name);
                                if (input != null) {
                                    let t = monsterNames;
                                    t[i] = input;
                                    setMonsterNames([...t]);
                                }
                            }}>
                                {name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {[...Array(10)].map((_, i) => (
                            <td className={activeMonsters[i] ? (i == 0 ? "l active" : i == 9 ? "r active" : "active") : (i == 0 ? "l" : i == 9 ? "r" : "")} key={i} onClick={() => {
                                let t = activeMonsters;
                                t[i] = !activeMonsters[i];
                                setActiveMonsters([...t]);
                                parseMonster(0, i + 1, activeMonsters[i]);
                            }}>
                                Power
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {[...Array(10)].map((_, i) => (
                            <td className={activeMonsters[i + 10] ? (i == 0 ? "l active" : i == 9 ? "r active" : "active") : (i == 0 ? "l" : i == 9 ? "r" : "")} key={i} onClick={() => {
                                let t = activeMonsters;
                                t[i + 10] = !activeMonsters[i + 10];
                                setActiveMonsters([...t]);
                                parseMonster(1, i + 1, activeMonsters[i + 10]);
                            }}>
                                Activate
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {[...Array(10)].map((_, i) => (
                            <td className={activeMonsters[i + 20] ? (i == 0 ? "l active" : i == 9 ? "r active" : "active") : (i == 0 ? "l" : i == 9 ? "r" : "")} key={i} onClick={() => {
                                let t = activeMonsters;
                                t[i + 20] = !activeMonsters[i + 20];
                                setActiveMonsters([...t]);
                                parseMonster(2, i + 1, activeMonsters[i + 20]);
                            }}>
                                Alternate Activate
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {[...Array(8)].map((_, i) => (
                            <td key={i} className="empty" />
                        ))}
                        <td className={activeMonsters[30] ? "active" : ""} onClick={() => {
                            let t = activeMonsters;
                            t[30] = !activeMonsters[30];
                            setActiveMonsters([...t]);
                            parseMonster(0, 31, activeMonsters[30]);
                        }}>
                            Door
                        </td>
                        <td className={activeMonsters[31] ? "r active" : "r"} onMouseDown={() => {
                            let t = activeMonsters;
                            t[31] = true;
                            setActiveMonsters([...t]);
                            parseMonster(0, 32, true);
                        }} onMouseUp={() => {
                            let t = activeMonsters;
                            t[31] = false;
                            setActiveMonsters([...t]);
                            parseMonster(0, 32, false);
                        }}>
                            Garbage
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className={`switch${connected ? "" : " disabled"}`}>
                <tbody>
                    <tr>
                        <td className={`switch l${actType == 0 ? (connected ? " active" : " dactive") : ""}`} onClick={() => setInput(0)}>
                            Keyboard
                        </td>
                        <td className={`switch r${actType == 1 ? (connected ? " active" : " dactive") : ""}`} onClick={() => setInput(1)}>
                            GUI
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Monsters;
