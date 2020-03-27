import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, deleteItem } from '../Redux/actions/actions'
import './style.css'
import Image from '../assets/image.jpg';
import Trash from '../assets/trashs.png'

const Counter = () => {

    const items = useSelector(state => state.items);

    const dispatch = useDispatch();

    const handleAdd = id => {
        dispatch(increment(id));
    };
    const handleMinus = id => {
        dispatch(decrement(id));
    };
    const handleRemove = id => {
        dispatch(deleteItem(id));
      }

    return (
        <div className='container'>

            {items.map(i => (
                <div className='counter' key={i.id}>
                    <img className='image' src={Image} alt='' />
                    <div className='infoCounter'>
                        <h4>{i.title}</h4>
                        <section>
                            <button onClick={handleMinus.bind(null, i.id)}>-</button>
                                <p>{i.count}</p>
                            <button onClick={handleAdd.bind(null, i.id)}>+</button>

                        </section>
                    </div>
                    <button onClick={handleRemove.bind(null, i.id)}><img className='trash' src={Trash} alt=''/></button>
                </div>
            ))}
        </div>
    )
}
export { Counter };