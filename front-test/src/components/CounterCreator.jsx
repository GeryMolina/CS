import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid';
import './style.css'
import axios from 'axios';

//actions 
import { addItem } from '../Redux/actions/actions'

const CounterCreator = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleClick = e => {
        const addItem1 = { title, count: 0 };
        e.preventDefault();
        dispatch(addItem(addItem1));
        setTitle('');

        //envio al servidor
        axios.post('/api/v1/counter',
            {
                title: addItem1.title,
                count: addItem1.count
            }
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
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