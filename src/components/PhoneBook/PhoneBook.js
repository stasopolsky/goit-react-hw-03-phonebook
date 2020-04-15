import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
// import PNotify from '@pnotify/dist/es/PNotify';

export default class PhoneBook extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState: ", prevState);
    console.log("this.state: ", this.state);

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    const { contacts } = this.state;
    const { name } = e;
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      const message = `${name} is already in contacts`;
      alert(message);
      return;
    }
    this.setState({
      contacts: [...contacts, e],
    });
  };

  deleteContact = (e) => {
    const { id } = e.target;
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter((contact) => {
      const nameContact = contact.name;
      return nameContact.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <>
        <h3>PhoneBook</h3>
        <ContactForm onSubmit={this.handleSubmit} />
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          items={filterContacts}
          onClickDelete={this.deleteContact}
        />
      </>
    );
  }
}
