import React from 'react';

export const ContactForm = ({ handleInput, handleSubmit, name, number }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Name</h3>
        <input onChange={handleInput} name="name" value={name} type="text" />
      </div>
      <div>
        <h3>Number</h3>
        <input
          onChange={handleInput}
          name="number"
          value={number}
          type="text"
        />
      </div>
      <input type="submit" value="Add" />
    </form>
  );
};
