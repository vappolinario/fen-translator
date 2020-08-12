import React from 'react';
import Chessboard from 'chessboardjsx';

const FenOutput = (props) => {

    const isValidFen = props.value.replace(/[a-zA-z]/g, '1')
        .replace(/\//g, '')
        .split(' ')[0]
        .split('')
        .map(c => parseInt(c))
        .reduce((a,b) => a+b) === 64;

    console.log('validation', isValidFen);

    return (
        <div>
            <h3>Result</h3>
            <p>
                <span className={ isValidFen ? "" : "alert" }>
                    {isValidFen ? "" : "Invalid Position : "}{props.value}
                </span>
            </p>
            <div className="chessBoard">
                <Chessboard
                    position={props.value}
                    draggable={false}
                    showNotation={false}
                    width={320}
                />
            </div>
        </div>
    );
};

export default FenOutput;

