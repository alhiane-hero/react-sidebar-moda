import { useGlobalContext } from '../Context';
import { FaTimes } from 'react-icons/fa';
import './style.css';

function Modal() {

    const {isModalOpen, closeModal} = useGlobalContext();

    return (
        <div className={isModalOpen ? 'modalOverlay showModal' : 'modalOverlay'}>
            <div className='modalContainer'>
                <h3>modal content</h3>
                <button className='closeAside' onClick={closeModal}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
}

export default Modal;
