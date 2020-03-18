import React from 'react';
import './style.css';
import AZ from '../assets/az.png';
import Orden from '../assets/orden.png';

const FilterItems = () => {
    return (
        <div className='filterItems'>
            <h2>Lista de Productos</h2>
            <div className='filter'>
                <button><img src={AZ} alt='' /></button>
                <button><img src={Orden} alt='' /></button>
                <input type="text" placeholder='Buscar producto' />
                <button className='btn'>Buscar</button>

            </div>

        </div>
    )
}
export default FilterItems;