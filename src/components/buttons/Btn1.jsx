import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './btn.css'


export const CloseRight = ({setFalse}) => <i onClick={setFalse} className='fas close-right-tap fa-angle-right'></i>

const Btn1 = ({children, rounded = false}) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (button) {
        const height = rounded ? button.offsetHeight: 0;
        button.style.setProperty('--border-radius-value', `calc(0.5 * ${height}px)`);
        }
    }, []);

    return (
        <button className="btn1" ref={buttonRef}>{children}</button>
    )
} 

Btn1.prototype = {
    children: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
}

export default Btn1;