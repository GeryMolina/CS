import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, deleteItem } from '../Redux/actions/actions'
import './style.css'

import Image from '../assets/image.png'
import Mas from '../assets/mas.png'
import Menos from '../assets/menos.png'


const Counter = () => {

    //const items = useSelector(state => state.items);
    const [items, setItems] = useState([]);
    // const items = axios.get('/api/v1/counters').then((response)=>response.data);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('/api/v1/counters');
            res.json().then(res=> setItems(res));
        }
        fetchData();

    }, []);
    console.log(items)
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
                    <img src={Image} alt='' />
                    <div className='infoCounter'>
                        <h4>{i.title}</h4>
                        <section>
                            <button onClick={handleMinus.bind(null, i.id)}><img src={Menos} alt='' /></button>
                            <p>{i.count}</p>
                            <button onClick={handleAdd.bind(null, i.id)}><img src={Mas} alt='' /></button>

                        </section>
                    </div>
                    <button className='fas fa fa-trash' onClick={handleRemove.bind(null, i.id)}></button>
                </div>
            ))}
        </div>
    )
}
export { Counter };