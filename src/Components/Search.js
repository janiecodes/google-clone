import '../App.css'
import React from 'react'
import {useState} from 'react'

function Search(){

    const [input, setInput] = useState('')

    return (
    <div className='search-component'>
        <div className='google-title'>
        Google
        </div>
        <div>

        </div>
    </div>
    )
}

export default Search;