import React from 'react';
import Chessboard from 'chessboardjsx';

function validateFEN(fenString) {
    return fenString
        .split(' ')[0] // only iterested in the first field of FEN string
        .replace(/[a-zA-z]/g, '1') // replace pieces to 1
        .replace(/\//g, '') // remove separators
        .split('') // get each char
        .map(c => parseInt(c)) // get int value of that char
        .reduce((a,b) => a+b) === 64; // the sum should be 64 (board squares)
}

const FenOutput = (props) => {
    const isValidFen = validateFEN(props.value);
    const message = isValidFen ? props.value : "Invalid Initial FEN String";
    const cssClass = isValidFen ? undefined : "alert" ;
    const board = !isValidFen ? "" :
            <div className="chessBoard">
                <Chessboard
                    position={props.value}
                    draggable={false}
                    showNotation={false}
                    width={320}
                />
            </div>;

    return (
        <div>
            <h3>Result</h3>
            <p>
                <span className={cssClass}
                    onClick={() => {navigator.clipboard.writeText(props.value)}}>
                    {message}
                </span>
            </p>
            {board}
        </div>
    );
};

export default FenOutput;

