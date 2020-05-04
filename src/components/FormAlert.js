import React from 'react'

export default function FormAlert({ type, text }) {

    
    return (
        <div className={`alert alert--${type}`}>
            {text}
        </div>
    )
}
