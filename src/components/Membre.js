import React, { Fragment } from 'react'

const Memebre = ({name, age, children}) => {
    return (
        <Fragment>
            <h2 style={{ 
                color: 'purple',
                backgroundColor: age < 20 ? 'skyblue' : 'green'
                }}> 
                { name.toUpperCase() } , { age }
            </h2>
            { children ? <p>{ children }</p> :<p>Pas de données en cours</p>}
        </Fragment>
    
    )
}

export default Memebre