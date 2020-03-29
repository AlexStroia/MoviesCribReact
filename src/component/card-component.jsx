import React from 'react'

const tmdbLogo = "https://image.tmdb.org/t/p/original/";

export const Card = props => {
   return <div className = 'card-container'>
        <image alt = "logo" src = {tmdbLogo.concat(props.poster_path)} />
        {console.log("Title is " + props.title)}
        <h1>{props.title}</h1>
  </div>
}