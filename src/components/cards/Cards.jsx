import './cards.css';
import React, { useState } from 'react';
import Btn1 from '../buttons/Btn1';
import propTypes from 'prop-types';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

export const Card1 = ({children, img, link='#', sub="Caffee Shop", width="33.333"}) => (
    <div className='card1' style={{width: `${width}%`}}>
        <a href={link}>
            <img src={img} alt="system" />
            <span>{sub}</span>
            <h4>{children}</h4>
        </a>
    </div>
)

Card1.propTypes = {
    children: propTypes.string.isRequired,
    img: propTypes.string,
    link: propTypes.string,
    sub: propTypes.string,
    width: propTypes.string,
}

export const SeeMoreText = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p>
        {isExpanded ? text : `${text.substring(0, limit)}...`}
        {text.length > limit && (
            <span 
                onClick={toggleExpand} 
                style={{ color: '#fff', cursor: 'pointer', textTransform: 'capitalize' }}
            >
            {isExpanded ? ' Show less' : 'more'}
            </span>
        )}
    </p>
  );
};

export const Card2 = ({img, name, price, description, width="31.666"}) => (
    <div className='card2' style={{width: `${width}%`}}>
        <div className='img'>
            <img src={img} alt="img" />
        </div>
        <span className='price'>{price}</span>
        <div className='content'>
            <h2>{name}</h2>
            <Btn1 size='small' rounded={true}>Add To Cart</Btn1>
        </div>
        <SeeMoreText text={description} limit={78} />
    </div>
)