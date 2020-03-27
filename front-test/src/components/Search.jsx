import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import lupa from '../assets/lupas.png'

import { searchItem } from '../Redux/actions/actions';

const Search = () => {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

    const handleChange = e => {
        setTitle(e.target.value)
    }
    const handleFind = () => {
        dispatch(searchItem(title));
        setTitle('');
    };



    return (
        <div className='search'>
            <input type="text" placeholder='Buscar producto' value={title} onChange={handleChange} />
            <button onClick={handleFind} className='btn'><img src={lupa} alt=''/></button>
        </div>
    )
}
export default Search;