import React from 'react';

const FenInput = ({onFormSubmitted, fenString, onFenStringChange}) => {
    return (
        <form className="fen-input" onSubmit={onFormSubmitted}>
            <h3 htmlFor="fenInput">Initial FEN String</h3>
            <input
                id="fenInput"
                name="fenInput"
                value={fenString}
                onChange={onFenStringChange}
            />
            <button>Translate</button>
        </form>
    );
};

export default FenInput;
