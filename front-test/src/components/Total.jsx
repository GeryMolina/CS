import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

const Total = () => {
    const total = useSelector(state => state.total);

    return (
        <div className='total'>
            <h4>Total Items</h4>
            <h5>{total}</h5>
        </div>
    )
}

export default Total;