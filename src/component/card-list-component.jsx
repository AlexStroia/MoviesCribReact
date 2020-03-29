import React from 'react'
import { Card } from './card-component'

export const CardList = props => {
    return <div className = "card-list">
    {props.movies.results.map(movie => (
<Card key monster = {movie}/>))}
</div>
}