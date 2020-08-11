import React from 'react';

const FenInput = (props) => {
    return (
        <form onSubmit={props.onFormSubmitted}>
            <h3 htmlFor="fenInput">Enter FEN String</h3>
            <input
                id="fenInput"
                name="fenInput"
                value={props.fenString}
                onChange={props.onFenStringChange}
            />
            <button>Translate</button>
        </form>
    );
};

export default FenInput;
