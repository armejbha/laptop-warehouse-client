import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Inventory from '../Inventory/Inventory';
import Solutions from '../Solutions/Solutions';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Solutions></Solutions>
            <Contact></Contact>
        </div>
    );
};

export default Home;