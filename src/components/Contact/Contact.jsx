import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    const { name, number, handleDelete } = this.props;
    return (
      <div>
        <span>
          {name || 'noName'}: {number || 'noNumber'}
        </span>
        <button onClick={handleDelete} type="button">
          Delete
        </button>
      </div>
    );
  }
}

export default Contact;
