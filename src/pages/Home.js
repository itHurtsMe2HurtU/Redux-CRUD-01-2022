import React from 'react';
import { useSelector } from 'react-redux';
import { selectProduct } from '../features/product/productSlice';

const Home = () => {
    const products = useSelector(selectProduct);
    console.log("All Products:-",products);
    return (
        <div>Home</div>
    )
}

export default Home;