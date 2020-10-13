import React from 'react';
import './Contact.css';

const online = true;
const Contact = () => {
  return (
    <div className='Contact'>
      
        <img
          className='avatar'
          src='https://randomuser.me/api/portraits/women/61.jpg'
          alt='Lola'
        />
  

      <div>
      <h4 className='name'>Lola</h4>
      <div className = "status"> 
        <div className='status-online'></div>
        <p className ="status-text">{online ? 'online' : ''}</p>
      </div>
      </div>
    </div>
  );
};

export default Contact;
