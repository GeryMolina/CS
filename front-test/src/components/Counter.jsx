import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './style.css'

import Image from '../assets/image.png'
import Mas from '../assets/mas.png'
import Menos from '../assets/menos.png'


const Counter = () => {

    const items = useSelector(state => state.items);
    const dispatch = useDispatch();
    

    return (
        <div className='container'>

           {items.map(i => (
            <div className='counter' key={i.id}>
                <img src={Image} alt='' />
                <div className='infoCounter'>
                    <h4>{i.item}</h4>
                    <section>
                        <button><img src={Mas} alt='' /></button>
                        <input type="text" />
                        <button><img src={Menos} alt='' /></button>
                    </section>
                </div>
                <button className='fas fa fa-trash'></button>
            </div>
        ))}
        </div>
    )
}
export { Counter };