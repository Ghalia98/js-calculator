import React from 'react'

function MathematicalKeys({ mathArr }) {
    return (
        <>
            {mathArr.map(mathEl => <button id={mathEl.id}>{mathEl.symbol}</button>)}
        </>
    )
}

export default MathematicalKeys