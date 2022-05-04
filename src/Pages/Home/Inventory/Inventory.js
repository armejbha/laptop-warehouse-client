import React from 'react';
import useItems from '../../../Hook/useItems';
import Items from '../Items/Items';

const Inventory = () => {
    const [items] = useItems();
    const newItems = items.slice(0, 6);

    return (
        <div className='bg-slate-100'>
            <div className='md:mx-24 mx-4 py-8'>
                <h2 className='text-center text-3xl mb-4' > Product Inventory</h2 >
                <div className='grid md:grid-cols-3 gap-8'>
                    {
                        newItems.map(item => <Items
                            key={item._id}
                            item={item}
                        ></Items>)
                    }
                </div>
            </div >
        </div >
    );
};

export default Inventory;