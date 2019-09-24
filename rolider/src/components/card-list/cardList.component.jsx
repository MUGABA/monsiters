import React from 'react'

import './card-list.styles.css';

import { Card } from '../card/card.component'



export const CardList = (props) =>(
    <div className= 'card-list' > {
        props.monsiters.map(monsiter=>(
        <Card key={monsiter.id} monsiter={monsiter}/>
        ))}
    </div>
)
