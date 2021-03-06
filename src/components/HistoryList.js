import React from 'react';
import './HistoryList.css';

function HistoryList() {
 return (
  <>
   <div className='history-fade history-fade-top' />
   <div className='history-container'>
    <div className='history-headings'>
     <h1>Timeline</h1>
     <p className='history-subheader'>Year by year.</p>
     <div className='history-classifier'>
      <div className='event' />
      <div className='education' />
      <div className='job' />
      <div className='exam' />
      <div className='startup' />
     </div>
    </div>
    <div id='timeline'>
     <div>
      <section class='year'>
       <section>
        <ul>
         <li>
          Currently <i class='fas fa-book-reader' />
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <section>
        <h4>April</h4>
        <ul>
         <li>
          Promoted to Principle at WarwickTECH!
          <div className='job' />
         </li>
        </ul>
       </section>
       <section>
        <h4>Feburary</h4>
        <ul>
         <li>
          WarwickHACK21
          <div className='event' />
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2021</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          COVID is still here... and I'm 20
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <section>
        <h4>September</h4>
        <ul>
         <li>
          Joined WarwickTECH
          <div className='job' />
         </li>
        </ul>
       </section>
       <section>
        <h4>August</h4>
        <ul>
         <li>
          Founded travel startup - Wondur+
          <div className='startup' />
         </li>
        </ul>
       </section>
       <section>
        <h4>May - September</h4>
        <ul>
         <li>
          Locked inside learning <i class='fas fa-laptop' />
          <div className='education' />
         </li>
        </ul>
       </section>
       <section>
        <h4>March</h4>
        <ul>
         <li>COVID LOCKDOWN!</li>
        </ul>
       </section>
       <h3>2020</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          19. The year where nothing happened...
          <br /> or everything?
         </li>
        </ul>
       </section>
       <section>
        <h4>September</h4>
        <ul>
         <li>
          Attended University of Warwick
          <div className='education' />
         </li>
        </ul>
       </section>
       <section>
        <h4>July-August</h4>
        <ul>
         <li>
          Holidayssssss (<i class='fas fa-subway' /> +{' '}
          <i class='fas fa-plane' />)
         </li>
        </ul>
       </section>
       <section>
        <h4>May</h4>
        <ul>
         <li>
          Smashed A-levels!
          <div className='exam' />
         </li>
        </ul>
       </section>
       <h3>2019</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Legal ;)
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <section>
        <h4>July - August</h4>
        <ul>
         <li>
          ISSET Mission Discovery
          <div className='event' />
         </li>
        </ul>
       </section>
       <section>
        <h4>May - August</h4>
        <ul>
         <li>
          Family trip round the world.
          <br />
          <li>Unforgettable experience.</li>
         </li>
        </ul>
       </section>
       <section>
        <h4>September - September 2019</h4>
        <ul>
         <li>
          Young Enterprise Company
          <div className='startup' />
         </li>
         <li>Represented the County Nationwide</li>
        </ul>
       </section>
       <h3>2018</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          17<sup>th</sup> Birthday!
         </li>
        </ul>
       </section>

       <section>
        <h4>November</h4>
        <ul>
         <li>
          Visited Culham Centre for Fusion Energy
          <br />
         </li>
        </ul>
       </section>
       <section>
        <h4>August</h4>
        <ul>
         <li>
          Saving lives
          <div className='job' />
          <br />
          <li>Started lifeguarding part time</li>
         </li>
        </ul>
       </section>
       <section>
        <h4>June</h4>
        <ul>
         <li>
          GCSEs Wooooh!
          <div className='exam' />
         </li>
        </ul>
       </section>
       <h3>2017</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Birthday cake disaster!
         </li>
        </ul>
       </section>

       <section>
        <h4>September</h4>
        <ul>
         <li>
          Attended Reigate Grammar School
          <div className='school' />
         </li>
        </ul>
       </section>
       <h3>2016</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Half way to an old man ;)
         </li>
        </ul>
       </section>
       <h3>2015</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          14<sup>th</sup> Birthday!
         </li>
        </ul>
       </section>
       <h3>2014</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Teenage years now!
         </li>
        </ul>
       </section>
       <h3>2013</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          12<sup>th</sup> Birthday!
         </li>
        </ul>
       </section>
       <section>
        <h4>September</h4>
        <ul>
         <li>Joined Reigate Grammar School</li>
        </ul>
       </section>
       <h3>2012</h3>
       <section>
        <ul>
         <li>Big boy time!</li>
        </ul>
       </section>
       <h3>2011</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Double digits - 10!!
         </li>
        </ul>
       </section>
       <section>
        <h4>May</h4>
        <ul>
         <li>
          Started learning Piano
          <div className='education' />
         </li>
        </ul>
       </section>
       <h3>2010</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />9<sup>th</sup> Birthday!
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2009</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Riding a bike
         </li>
        </ul>
       </section>
       <h3>2008</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Discovering maths
         </li>
        </ul>
       </section>
       <h3>2007</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Turning into a fish
         </li>
        </ul>
       </section>
       <section>
        <h4>September</h4>
        <ul>
         <li>
          Primary School
          <div className='school' />
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2006</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Good ol round number of 5!
         </li>
        </ul>
       </section>
       <h3>2005</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />4<sup>th</sup> Birthday - almost child
          genius!
         </li>
        </ul>
       </section>
       <h3>2004</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />3<sup>rd</sup> Birthday! Learning to play
          with food
         </li>
        </ul>
       </section>
       <h3>2003</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />2<sup>nd</sup> Birthday! Learning to walk
         </li>
        </ul>
       </section>
       <h3>2002</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />1<sup>st</sup> Birthday! Learning to
          breathe
         </li>
        </ul>
       </section>
       <h3>2001</h3>
       <section>
        <ul>
         <li>
          <i class='far fa-calendar' />
          Popped into existance
          <div className='school' />
         </li>
        </ul>
       </section>
      </section>
     </div>
    </div>
   </div>
   <div className='history-fade history-fade-bottom' />
  </>
 );
}

export default HistoryList;
