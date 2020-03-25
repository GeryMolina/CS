import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import './style.css'

//actions 
import { addItem } from '../Redux/actions/actions'

const CounterCreator = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleClick = e => {
        const addItem1 = { id:uuidv4(), title, count: 0 };
        e.preventDefault();
        dispatch(addItem(addItem1));
        setTitle('');
    }
    return (
        <div className='addList'>
            <input
                type='text'
                name='title'
                value={title}
                onChange={handleChange}
                placeholder='Ingresa un producto' />
            <button onClick={handleClick}>Agregar</button>
        </div>
    )
}

export default CounterCreator;