import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import AZ from '../assets/AZ.png';
import Orden from '../assets/ordenar.png';
import { orderTitle, orderCount} from '../Redux/actions/actions';

const Sorting = () => {

    const items = useSelector(state => state.items)
    const dispatch = useDispatch();

    const handleOrderAz = () => {
        dispatch(orderTitle(items.title))
    };

    const handleCount = () => {
        dispatch(orderCount(items.count))
    };

    return (
        <div className='sortItems'>
            <button onClick={handleOrderAz}><img src={AZ} alt='' /></button>
            <button onClick={handleCount}><img src={Orden} alt='' /></button>
        </div>
    )
}
export default Sorting;