import React from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Sorting from '../components/Sorting';


const FilterItems = () => {


    
    return (
        <div className='filterItems'>
            <div className= 'filter1'>   
                <Search/>
             
            </div>  
            <div className= 'filter2'>
                <Sorting/>
                <Filter/>
            </div>
           

        </div>
    )
}
export default FilterItems;