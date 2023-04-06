import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData()
    console.log(tshirts)

    return (
        <div className='home-container'>
        <div className='t-shirts-container'>
        {
            tshirts.map(tshirt =><TShirt
                
                key={_id}
                tshirt ={tshirt}
                />)
          }
        </div>
        <div className='cart-container'>
          <Cart />
        </div>
        </div>
    );
};

export default Home;