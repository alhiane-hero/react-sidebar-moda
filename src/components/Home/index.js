import React from 'react';
import { FaBars } from 'react-icons/fa';
import {useGlobalContext} from '../Context';
import './style.css'

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    return (
        <main>
            <button onClick={openSidebar} className='toggleAside'>
                <FaBars />
            </button>
            <button onClick={openModal} className='openModal'>
                show modal
            </button>
        </main>
    );
};

export default Home;