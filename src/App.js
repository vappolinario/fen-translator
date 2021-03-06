import React, {useState, useCallback, useEffect} from 'react';
import FenInput from './components/FenInput/FenInput.js';
import FenOutput from './components/FenOutput/FenOutput.js';
import FenModifiers, { WHITE } from './components/FenModifiers/FenModifiers.js';
import ForkRibbon from './components/ForkRibbon.js';
import FenHistory from './components/FenHistory/FenHistory.js';

function App() {
    const [fenString, setFenString] = useState('tcbdrbct-pppppppp-8-8-8-8-PPPPPPPP-TCBDRBCT b RDrd - 0 1');
    const [translated, setTranslated] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    const [turn, setTurn] = useState(WHITE);
    const [history, setHistory] = useState([]);

    const onFenStringChange = useCallback((e) => {setFenString(e.target.value)}, []);

    const appendTurn = useCallback((t) => {
        setTranslated(translated.split(' ')[0] + ' ' + t + ' - - 0 1');
    }, [translated]);

    const onTurnChange = useCallback((e) => {
        setTurn(e.target.value);
        appendTurn(e.target.value);
    }, [setTurn, appendTurn]);

    const onHistoryClick = useCallback((e) => {
        setTranslated(e.target.textContent);
        setFenString('');
    }, [setTranslated]);

    const onFormSubmitted = useCallback((e) => {
        e.preventDefault();
        const output = fenString.split(' ')[0].replace(/[-dDRrTtCc]/g, function (m) {
            return { 'r': 'k', 'R': 'K', 'd': 'q', 'D': 'Q', 't': 'r',
                'T': 'R', 'c': 'n', 'C': 'N', '-': '/', }[m];
        }) + ' ' + turn + ' - - 0 1';

        setTranslated(output);
        setHistory([output, ...history]);
        localStorage.setItem("chess.appolinario.com/history", JSON.stringify(history));
    }, [fenString, turn, setHistory, history]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem("chess.appolinario.com/history"));
        setHistory(savedHistory === null ? [] : savedHistory);
    }, [setHistory]);

    return (
        <div className="App">
            <div className="container container-with-history">
                <div className="header">
                    <h2>FEN String Translator</h2>
                    <a
                        href="https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation">
                        What is a FEN string?
                    </a>
                </div>
                <FenInput
                    onFenStringChange={onFenStringChange}
                    fenString={fenString}
                    onFormSubmitted={onFormSubmitted}
                />
                <FenModifiers turn={turn} onTurnChange={onTurnChange} />
                <FenOutput value={translated} />
                <FenHistory history={history} onClick={onHistoryClick} />
            </div>
            <ForkRibbon />
        </div>
    );
}

export default App;
