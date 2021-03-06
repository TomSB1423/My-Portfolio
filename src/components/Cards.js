import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
 return (
  <>
   <div className='cards-fade cards-fade-top' />
   <div className='cards'>
    <h1>Featured Projects</h1>
    <div className='cards__container'>
     <div className='cards__wrapper'>
      <ul className='cards__items'>
       <CardItem
        src='images/Wondur/logo.png'
        text='Wondur'
        label='Company'
        path='/'
       />
       <CardItem
        src='images/WarwickTECH/WTlogo.jpg'
        text='WarwickTECH'
        label='Company'
        path='/'
       />
      </ul>
      <ul className='cards__items'>
       <CardItem
        src='images/img-9.jpg'
        text='Showcasing my projects'
        label='Personal Project'
        path='/'
       />
       <CardItem
        src='images/img-9.jpg'
        text='Project'
        label='Personal Project'
        path='/'
       />
       <CardItem
        src='images/Donatus/YElogo.jpg'
        text='Managing Director of Donatus - YE Company'
        label='Company'
        path='/'
       />
      </ul>
     </div>
    </div>
   </div>
   <div className='cards-fade cards-fade-bottom' />
  </>
 );
}

export default Cards;
