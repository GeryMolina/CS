import React from 'react';
import './style.css'
import image from '../assets/image.png'
import Mas from '../assets/mas.png'
import Menos from '../assets/menos.png'
import Borrar from '../assets/borrar.png'

const Counter = () => {

    return (
        <div className='container'>
        <div className='counter'>
            <img src={image} alt='' />
            <div className='infoCounter'>
                <h4>Nombre</h4>
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