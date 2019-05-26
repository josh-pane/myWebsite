import React, { Component } from "react";
import { Document } from 'react-pdf'
class Resume extends Component {
  render() {
    return (
      <div>
        <div className='col'>
          <embed src={require('./img/Joshua_Pane_Resume.pdf')} height= '500px' width='100%' />
        </div>
      </div>
    );
  }
}

export default Resume;
