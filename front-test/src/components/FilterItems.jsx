import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import AZ from '../assets/az.png';
import Orden from '../assets/orden.png';
import { orderTitle, orderCount } from '../Redux/actions/actions';

const FilterItems = () => {

    const items = useSelector(state => state.items)

    const dispatch = useDispatch();

    const handleOrderAz = () => {
        dispatch(orderTitle(items.title))
    };

    const handleCount = () => {
        dispatch(orderCount(items.count))
    };

    return (
        <div className='filterItems'>
            <h2>Lista de Productos</h2>
            <div className='filter'>
                <button onClick={handleOrderAz}><img src={AZ} alt='' /></button>
                <button onClick={handleCount}><img src={Orden} alt='' /></button>
                <input type="text" placeholder='Buscar producto' />
                <button className='btn'>Buscar</button>

            </div>

        </div>
    )
}
export default FilterItems;