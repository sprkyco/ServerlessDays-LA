import React, { Component } from 'react';

const style = {
  'margin-left': '5%'
}
class Tickets extends Component {
  render () {
    return (
      <iframe src="//ticketbud.com/events/08086782-abc0-11e8-9de1-ff718b66624f/external" width="90%" height="400" vspace="0" hspace="0" style={style} marginheight="5" align="middle" marginwidth="5" scrolling="auto" allowtransparency="true" frameborder="0"></iframe>
    );
  }
}

export default Tickets;