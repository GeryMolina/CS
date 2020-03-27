import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import Arrow from '../assets/arrow.png';

import { lessCount, greaterCount } from '../Redux/actions/actions';

const FilterItems = () => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const dispatch = useDispatch();

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
        <div className='filter'>
            <div className='filterCount'>
                <p>Menor que</p>
                <section>
                    <input type='number' value={min} onChange={handleChangeMin} />
                    <button onClick={handleLess}><img src={Arrow} alt=''/></button>
                </section>
            </div> 
            <div className='filterCount'>   
                <p>Mayor que</p>
                <section>
                    <input type='number' value={max} onChange={handleChangeMax} />
                    <button onClick={handleUpper}><img src={Arrow} alt=''/></button>
                </section>
                
            </div>

        </div>
    )
}
export default FilterItems;