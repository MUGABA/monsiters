import React from 'react'
import './card.styles.css'


export const Card = (props) =>(
    <div className = 'card-container'>
        <img alt='monister' 
        src ={`https://robohash.org/${props.monsiter.id}?set=set2&size=180x180`}/>
        <h1>{props.monsiter.name}</h1>
    </div>
)
    
