import React, { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import Section from '../Section/Section';
import uuid from 'uuid';
import { ContactList } from '../ContactList/ContactList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(state => {
      return {
        contacts: [
          ...state.contacts,
          {
            id: uuid(),
            name: this.state.name,
            number: this.state.number,
          },
        ],
        name: '',
        number: '',
        filter: '',
      };
    });
  };

  handleDelete = id => {
    this.setState(ps => {
      console.log(ps);
      const filtered = ps.contacts.filter(item => {
        return item.id !== id;
      });
      return { contacts: filtered };
    });
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
          />
        </Section>
        <Section title="Contacts">
          <ContactsFilter onChange={this.handleInput} filter={filter} />
          <ContactList
            handleDelete={this.handleDelete}
            contacts={filteredContacts}
          />
        </Section>
      </div>
    );
  }
}
