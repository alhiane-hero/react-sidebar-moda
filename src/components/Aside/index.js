import { useGlobalContext } from '../Context';
import {links, social} from '../Data';
import { FaTimes } from 'react-icons/fa';
import Logo from '../../Logo.svg';
import './style.css';

function Aside() {

    const {isSidebarOpen, closeSidebar} = useGlobalContext();

    return (
        <div className={isSidebarOpen ? 'sideBar showSideBar' : 'sideBar'}>
            <header>
                <img className='logo' src={Logo} alt='logo' />
                <button className='closeAside' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </header>
            <section className='Links'>
                <ul>{
                    links.map(link => {
                        const {id, url, text, icon} = link
                        return <li key={id}>
                            <a href={url}>
                                {icon} {text}
                            </a>
                        </li>
                    })
                }</ul>
            </section>
            <footer>
                <ul>{
                    social.map(item => {
                        const {id, url, icon} = item
                        return <li key={id}>
                            <a href={url}>
                                {icon}
                            </a>
                        </li>
                    })
                }</ul>
            </footer>
        </div>
    );
}

export default Aside;
