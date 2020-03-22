import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import './style.css'

//actions 
import { addItem } from '../Redux/actions/actions'

const CounterCreator = () => {

    const dispatch = useDispatch();

    const [item, setItem] = useState('');

    const handleChange = (e) => {
        setItem(e.target.value)
    }
    const handleClick = e => {
        e.preventDefault();
        dispatch(addItem({ id: uuidv4(), item, count:0 }));
        
    }
    return (
        <div className='addList'>
            <input
                type='text'
                name='title'
                value={item}
                onChange={handleChange}
                placeholder='Ingresa un producto' />
            <button onClick={handleClick}>Agregar</button>
        </div>
    )
}

export default CounterCreator;