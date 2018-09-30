import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import ScrollableAnchor from 'react-scrollable-anchor';
import Map from './Map';
import Tickets from './Tickets';

class Home extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <ScrollableAnchor id={'home'}>
            <h2 className='center-align shrinkme'>ServerlessDays in LA</h2>
          </ScrollableAnchor>
          <Row>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'/media/unicorn_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Inclusive</h4>
              <p>Hone your cloud skills and learn the power of serverless during the conference dedicated to the serverless development community.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'/media/octo_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Real</h4>
              <p>The single day, single track conference for everyone where real users showcase their solution to common problems using serverless platforms.</p>
            </Col>
            <Col s={12} m={4} l={4} className='center-align top-marg'>
              <img src={'/media/moth_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
              <h4 className='top-marg'>Growing</h4>
              <p>Whether you are a beginner or an expert, meet like minded-people and build your network in the global cloud society.</p>
            </Col>
          </Row>
          <div className='space' />
          <div className='container'>
            <h2 className='center-align'>Call for papers</h2>
            <p>If you are interested in serverless technology and have a story to tell, we would be very happy to give you the opportunity to speak in front of an audience eager to hear your tales.</p>
            <p>It doesn't matter if you're just starting out or if you are already an experienced, battle-hardened cloud guru. We want you to speak!</p>
            <p>We aim to make ServerlessDays Los Angeles an inclusive conference welcoming speakers from diverse backgrounds.</p>
            <div className='center-align'>
              <a className='btn-large top-marg' href='https://papercall.io/serverlessdaysla' target='_blank' rel='noopener noreferrer'>Submit your proposal</a>
            </div>
            <div className='space' />
          </div>
          <Tickets />
          <div className='container'>
            <h2 className='center-align'>Join us in Los Angeles!</h2>
            <p>ServerlessDays Los Angeles will take place at <a href='https://www.eventbrite.com/v/renberg-theatre-1685' target='_blank' rel='noopener noreferrer'>Renberg Theatre </a>in February 27, 2019.</p>
            <p>Renberg Theatre
              <br />1125 N McCadden Pl
              <br />Los Angeles, CA 90028</p>
            <div className='space' />
          </div>
        </div>
        <div className='map-div'>
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;
