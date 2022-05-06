import React from 'react'

function NumKeys({ numArr }) {
    return (
        <>
            {numArr.map(numEl => <button id={numEl.id}>{numEl.num}</button>)}
        </>
    )
}

export default NumKeys