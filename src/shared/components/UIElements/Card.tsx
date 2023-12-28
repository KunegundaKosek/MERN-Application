import React from 'react'
import '../../../scss/Card.scss'
import { CardProps } from '../../interfaces/interface-card'

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={`card ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default Card
