import React from 'react';
import Contact from './components/Contact';
import PropTypes from 'prop-types';
import ContactList from './components/ContactList'

function App() {
  return (
    <div className='App'> 

      <ContactList/>
      
    </div>
  );
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
export default App;
