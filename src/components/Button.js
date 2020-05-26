import React from 'react';
import './Button.css'
const Button = ({ addAge }) => (
    <button onClick={ addAge }> Augmenter l'age </button>
)

export default Button