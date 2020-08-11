import React from 'react';

export const WHITE = "w";
export const BLACK = "b";

const FenModifiers = (props) => {
    return (
        <div>
            <h3>Active Color</h3>
            <input type="radio" value={WHITE} checked={props.turn === WHITE} onChange={props.onTurnChange}/>White
            <input type="radio" value={BLACK} checked={props.turn === BLACK} onChange={props.onTurnChange}/>Black
        </div>
    );
};

export default FenModifiers;

