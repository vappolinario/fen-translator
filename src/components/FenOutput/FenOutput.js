import React  from 'react';
import {ChessBoard} from 'react-fen-chess-board';

function validateFEN(fenString) {
    const fields = fenString
        .split(' ')[0]; // only iterested in the first field of FEN string

    const kings = fields.match(/[kK]/g).length;
    if ( kings !== 2 ) {
        return {
            message: "Invalid number of kings: " + kings,
            valid: false
        }
    }

    const invalid = fields.split('/').filter(isInvalidRow);

    if ( invalid.length !== 0) {
        return {
            message:"Invalid Rows: " + invalid.join(','),
            valid: false
        }
    }

    return { valid: true }
}

function isInvalidRow(row) {
    return row
        .replace(/[a-z]/ig, '1') // replace pieces to 1
        .split('') // get each char
        .map(c => parseInt(c)) // get int value of that char
        .reduce((a,b) => a+b) !== 8; // the sum should be 64 (board squares)
}

const FenOutput = ({value}) => {
    const isValidFen = validateFEN(value);
    const message = isValidFen.valid ? value : isValidFen.message;
    const cssClass = isValidFen.valid ? undefined : "alert" ;
    const board = !isValidFen.valid ? "" :
        <div className="chessBoard" data-testid="fenoutput-test-id" >
            <ChessBoard
                fen={value}
                width={320}
            />
        </div>;

    return (
        <div>
            <h3>Result</h3>
            <p>
                <span className={cssClass}
                    onClick={() => {navigator.clipboard.writeText(value)}}>
                    {message}
                </span>
            </p>
            {board}
        </div>
    );
};

export default FenOutput;

