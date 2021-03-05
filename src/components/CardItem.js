import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  const colorDict = {'Start Up': 'blue',
                     'Event': 'red',
                     'Personal Project': 'green'}

  const color = colorDict[props.label]
  console.debug(color)
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className={`cards__item__pic-wrap ${color}`} data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
