import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import Image from '../assets/image.png'
import Mas from '../assets/mas.png'
import Menos from '../assets/menos.png'
import Borrar from '../assets/borrar.png'

const Counter = () => {

    const data = useSelector(state => state.item)
    
    console.log(data)
    return (
        <div className='container'>
        <div className='counter'>
            <img src={Image} alt='' />
            <div className='infoCounter'>
                <h4>{data}</h4>
                <section>
                    <button><img src={Mas} alt=''/></button>
                    <input type="text"/>
                    <button><img src={Menos} alt=''/></button>
                </section>
            </div>
            <button><img className='trash' src={Borrar} alt=''/></button>
        </div>
        </div>
    )
}
export default Counter;