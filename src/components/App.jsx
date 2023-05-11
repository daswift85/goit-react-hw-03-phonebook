import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
const { ContactForm } = require('./ContactForm/ContactForm');

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const normalizedFind = newContact.name.toLowerCase();
        const findName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedFind);
        if (findName) {
            return alert(`${newContact.name} is already in contacts.`);
        }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFind = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFind)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(contact => contact.id !== contactId),
        ],
      };
    });
  };

  handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} contacts={this.state.contacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <p>test</p>
      </div>
    );
  }
}
