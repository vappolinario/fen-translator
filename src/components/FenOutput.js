import React from 'react';
import Chessboard from 'chessboardjsx';

const FenOutput = (props) => {
    return (
        <div>
            <h3>Translation</h3>
            <p><span>{props.value}</span></p>
            <Chessboard position={props.value} draggable={false} showNotation={false} width={320} />
        </div>
    );
};

export default FenOutput;

