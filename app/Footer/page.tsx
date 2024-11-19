import React from 'react';
import Navbar from '../components/Navbar';

const Page = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-screen bg-green-950 text-white text-5xl font-serif'>This is Footer Page</div>
        </div>
    );
}

export default Page;