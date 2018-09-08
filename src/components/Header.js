import React, { Component } from 'react';
class Header extends Component {
  render () {
    return (
      <div>
        <header className='header grad-bg'>
          <img src={'/media/logo-serverless.png'} alt={'ServerlessDays logo'} className='responsive-img' />
          <h2>One Day. One Track. One Community.</h2>
          <h4>Save The Date</h4>
          <a href='https://www.papercall.io/serverlessdaysla' target='_blank' rel='noopener noreferrer' className='btn-large top-marg'>Propose a talk!</a>
          <h5 className='top-marg'>February 2019 - Los Angeles, CA</h5>
        </header>
      </div>
    );
  }
}

export default Header;
