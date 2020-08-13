import React, {useState, useCallback} from 'react';
import FenInput from './components/FenInput';
import FenOutput from './components/FenOutput';
import FenModifiers, { WHITE } from './components/FenModifiers';

function App() {
    const [fenString, setFenString] = useState('tcbdrbct-pppppppp-8-8-8-8-PPPPPPPP-TCBDRBCT b RDrd - 0 1');
    const [translated, setTranslated] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    const [turn, setTurn] = useState(WHITE);

    const onFenStringChange = useCallback((e) => {setFenString(e.target.value)}, []);

    const appendTurn = useCallback((t) => {
        setTranslated(translated.split(' ')[0] + ' ' + t + ' - - 0 1');
    }, [translated]);

    const onTurnChange = useCallback((e) => {
        setTurn(e.target.value);
        appendTurn(e.target.value);
    }, [setTurn, appendTurn]);

    const onFormSubmitted = useCallback((e) => {
        e.preventDefault();
        const output = fenString.replace(/[-dDRrTtCc]/g, function (m) {
            return { 'r': 'k', 'R': 'K', 'd': 'q', 'D': 'Q', 't': 'r',
                'T': 'R', 'c': 'n', 'C': 'N', '-': '/', }[m];
        });

        setTranslated(output);
    }, [fenString]);

    return (
        <div className="App">
            <div className="container">
                <h2>FEN String Translator</h2>
                <a href="https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation">What is a FEN string?</a>
                <FenInput
                    onFenStringChange={onFenStringChange}
                    fenString={fenString}
                    onFormSubmitted={onFormSubmitted}
                />
                <FenModifiers turn={turn} onTurnChange={onTurnChange} />
                <FenOutput value={translated} />
            </div>
        </div>
    );
}

export default App;
