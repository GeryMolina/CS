import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import AZ from '../assets/az.png';
import Orden from '../assets/orden.png';
import { orderTitle, orderCount, searchItem, lessCount, greaterCount } from '../Redux/actions/actions';

const FilterItems = () => {

    const items = useSelector(state => state.items)
    const [title, setTitle] = useState('')
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    const dispatch = useDispatch();

    const handleOrderAz = () => {
        dispatch(orderTitle(items.title))
    };

    const handleCount = () => {
        dispatch(orderCount(items.count))
    };

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleFind = () => {
        dispatch(searchItem(title));
        setTitle('');
    };

    const handleChangeMin = e => {
        setMin(e.target.value);
    }
    const handleChangeMax = e => {
        setMax(e.target.value);
    }
    const handleLess = () => {
        dispatch(lessCount(min));
        setMin(0); //vr si lo modificas
    }
    const handleUpper = () => {
        dispatch(greaterCount(max));
        setMax(0); //same
    }
    return (
        <div className='filterItems'>
            <h2>Lista de Productos</h2>
            <div className='filter'>
                <button onClick={handleOrderAz}><img src={AZ} alt='' /></button>
                <button onClick={handleCount}><img src={Orden} alt='' /></button>
                <input type="text" placeholder='Buscar producto' value={title} onChange={handleChange} />
                <button onClick={handleFind} className='btn'>Buscar</button>
                <input  value={min} onChange={handleChangeMin} />
                <button onClick={handleLess}>Menor que</button>
                <input  value={max} onChange={handleChangeMax}/>
                <button onClick={handleUpper}>Mayor que</button>

            </div>

        </div>
    )
}
export default FilterItems;