import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Sponsors extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container'>
          <h2 className='center-align'>Sponsor ServerlessDays Los Angeles</h2>
          <h4>Become a sponsor!</h4>
          <p>ServerlessDays is a community-focused, single-track, one-day event that moves away from the hype and focuses on the reality serverless-based solutions. Our charter is to "spread the magic of serverless" in Seattle and we need sponsors like you to help! </p>
          <p>To become a sponsor or learn more, please contact <a href='mailto:cody@sprky.co?subject=Sponsorship Inquiry'>cody@sprky.co</a></p>
          <div className='center-align'>
            <a className='btn-large top-marg' href={'/media/ServerlessDays-LA-Prospectus.pdf'} target='_blank' rel='noopener noreferrer' download>Sponsor Prospectus</a>
          </div>
          <Row>
            <Col s={12} m={6} l={6} className='center-align top-marg'>
              <img src='/media/mode2-logo.png' className='responsive-img not-wide'></img>
            </Col>
          </Row>
          <div className='space-foot' />
        </div>
      </div>
    );
  }
}

export default Sponsors;
