import React, { Fragment } from 'react'

const Memebre = ({name, age, children}) => {
    return (
        <Fragment>
            <h2> { name.toUpperCase() } , { age }</h2>
            { children ? <p>{ children }</p> :<p>Pas de données en cours</p>}
        </Fragment>
    
    )
}

export default Memebre