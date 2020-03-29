import React from 'react'

export const SearchBar = ({placeholder, handleChange}) => (
    <input className = "search-box" type = "text"
    placeholder = {placeholder}
    onChange = {handleChange}
/>
);