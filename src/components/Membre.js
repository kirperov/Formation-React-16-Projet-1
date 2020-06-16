import React, { Fragment } from 'react'

const Memebre = ( {name, age, children, hideName, handleChange }) => {
    return (
        <Fragment>
            <h2 style={{ 
                color: 'purple',
                backgroundColor: age < 20 ? 'skyblue' : 'green'
                }}> 
                { name.toUpperCase() } , { age }
            </h2>
            <input value={ name } type="text" onChange={ handleChange } />
            <button onClick={hideName}>X</button>
            { children ? <p>{ children }</p> :<p>Pas de données en cours</p>}
        </Fragment>
    )
}

export default Memebre