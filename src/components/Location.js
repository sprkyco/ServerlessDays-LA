import React, { Component } from 'react';
import Map from './Map';

class Location extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <h2 className='center-align'>Join us in Los Angeles!</h2>
        </div>
        <img src={'/media/los-angeles-1840764_1920.jpg'} alt={'Los Angeles Skyline'} className='full-img' />
        <div className='container'>
          <div className='container'>
            <h2 className='center-align' id='venue'>Venue</h2>
            <p>ServerlessDays Los Angeles will take place at <a href='https://www.eventbrite.com/v/renberg-theatre-1685' target='_blank' rel='noopener noreferrer'>Renberg Theatre </a> somewhere in Los Angeles.</p>
            <p>Renberg Theatre <br />1125 N McCadden Pl<br />Los Angeles, CA 90028</p>
            <div className='small-space' />
          </div>
        </div>
        <img src={'/media/venue.jpg'} alt={'Venue Picture Alt'} className='full-img' />
        <div className='small-space' />
        <h2 className='center-align' id='map'>Map</h2>
        <Map />
      </div>
    );
  }
}

export default Location;
