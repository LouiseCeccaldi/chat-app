import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.status,
    };
  }

  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt='Peter Palmer' />

        <div>
          <p className='name'>{this.props.name}</p>
          <div
            className='status'
            onClick={(event) => {
              this.setState({
                online: this.state.online ? false : true,
              });
            }}
          >
            <div
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></div>
            <p className='status-text'>
              {this.state.online ? 'online' : 'offline'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
