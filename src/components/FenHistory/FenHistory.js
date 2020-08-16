import React  from 'react';
import stringHash from 'string-hash';

const FenHistory = ({history, onClick}) => {
    const hashs = [];

    const listItems = history.map((history) => {
        const hash = stringHash(history);
        if ( hashs.includes(hash) === false ) {
            hashs.push(hash);
            return <li key={hash} onClick={onClick}>{history}</li>
        }
        return "";
    });

    return (
        <div className="fen-history">
            <h3>History</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

export default FenHistory;

