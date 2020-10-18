import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props.online,
    };
  }



  render() {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar} alt='Peter Palmer' />

      <div>
        <p className='name'>{props.name}</p>
        <div className='status'>
          <div className={props.online ? 'status-online' : 'status-offline'} />
          <p className='status-text'>{props.online ? 'oneline' : 'offline'}</p>

          <span
          className={this.state.online ? 'online' : 'offline'}
              onClick={event => {
                const noffline = !this.state.online;
                this.setState({ fonline: offline });
              }}
            >&#9733;</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
