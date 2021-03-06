import React from 'react';
import './HistoryList.css';

function HistoryList() {
 return (
  <>
   <div className='history-fade history-fade-top' />
   <div className='history-container'>
    <div className='history-headings'>
     <h1>Timeline</h1>
     <p className='history-subheader'>Just on an day to day basis.</p>
    </div>
    <div id='timeline'>
     <div>
      <section class='year'>
       <h3>2021</h3>
       <section>
        <ul>
         <li>Text</li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2020</h3>
       <section>
        <h4>Month</h4>
        <ul>
         <li>Text</li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2019</h3>
       <section>
        <h4>Month</h4>
        <ul>
         <li>Text</li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2018</h3>
       <section>
        <h4>Month</h4>
        <ul>
         <li>Text</li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <section>
        <h4>May-August</h4>
        <ul>
         <li>
          Family trip round the world.
          <div className='holiday' />
          <br />
          Unforgettable experience.
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2017</h3>
       <section>
        <h4>August</h4>
        <ul>
         <li>
          Saving lives.
          <div className='exam' />
          <br />
          Lifeguarding part time.
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
      </section>
      <section class='year'>
       <h3>2012</h3>
       <section>
        <h4>September</h4>
        <ul>
         <li>
          Big school! Attended Reigate Grammar School.
          <div className='school' />
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2010</h3>
       <section>
        <h4>May</h4>
        <ul>
         <li>
          Started learning Piano
          <div className='event' />
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2006</h3>
       <section>
        <h4>September</h4>
        <ul>
         <li>
          Primary School.
          <div className='school' />
         </li>
        </ul>
       </section>
      </section>
      <section class='year'>
       <h3>2001</h3>
       <section>
        <h4>March</h4>
        <ul>
         <li>
          Popped into existance.
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
