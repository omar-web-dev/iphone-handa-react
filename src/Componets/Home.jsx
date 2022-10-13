import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>Show me all Data from node API</h1>
            <h1>Total Phone {data.length}</h1>
        </div>
    );
};

export default Home;