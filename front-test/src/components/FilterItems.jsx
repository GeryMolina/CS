import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import AZ from '../assets/az.png';
import Orden from '../assets/orden.png';
import { orderTitle, orderCount, searchItem } from '../Redux/actions/actions';

const FilterItems = () => {

    const items = useSelector(state => state.items)
    const [title, setTitle] = useState('')

    const dispatch = useDispatch();

    const handleOrderAz = () => {
        dispatch(orderTitle(items.title))
    };

    const handleCount = () => {
        dispatch(orderCount(items.count))
    };

    const handlechange = e => {
        setTitle(e.target.value)
        console.log(title)

    }

    const handleFind = () => {
        dispatch(searchItem(title));
        setTitle('');
    };

    return (
        <div className='filterItems'>
            <h2>Lista de Productos</h2>
            <div className='filter'>
                <button onClick={handleOrderAz}><img src={AZ} alt='' /></button>
                <button onClick={handleCount}><img src={Orden} alt='' /></button>
                <input type="text" placeholder='Buscar producto' value={title} onChange={handlechange} />
                <button onClick={handleFind} className='btn'>Buscar</button>

            </div>

        </div>
    )
}
export default FilterItems;