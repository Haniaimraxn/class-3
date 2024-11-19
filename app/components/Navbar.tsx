import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-2 text-white font-serif text 5xl bg-lime-950'>
            <Link className="p-4" href ="/">Home</Link>
            <Link className="p-4" href ="/About">About</Link>
            <Link className="p-4" href ="/Contact">Contact</Link>
            <Link className="p-4" href ="Footer/">Footer</Link>
         </div>
    );
}

export default Navbar;