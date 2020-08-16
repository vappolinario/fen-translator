import React from 'react';

export const WHITE = "w";
export const BLACK = "b";

const FenModifiers = ({turn, onTurnChange}) => {
    return (
        <div className="fen-modifiers">
            <h3>Active Color</h3>
            <input type="radio" value={WHITE} checked={turn === WHITE} onChange={onTurnChange}/>White
            <input type="radio" value={BLACK} checked={turn === BLACK} onChange={onTurnChange}/>Black
        </div>
    );
};

export default FenModifiers;

