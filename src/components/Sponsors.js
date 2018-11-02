import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Sponsors extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col s={12} m={6} l={6} className='center-align top-marg'>
            <img src='/media/mode2-logo.png' className='responsive-img not-wide'></img>
          </Col>
        </Row>
        <div className='space-foot' />
      </div>
    );
  }
}

export default Sponsors;
