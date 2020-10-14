import React from 'react';
import './Contact.css';

function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar} alt='Peter Palmer' />

      <div>
        <p className='name'>{props.name}</p>
        <div className='status'>
          <div className={props.online ? 'status-online' : 'status-offline'} />
          <p className='status-text'>{props.online ? 'oneline' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
