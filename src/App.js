import shortid from 'shortid';
import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/Contactlist/ContactList';
import { Filter } from './components/Filter/Filter';
import { Container } from './components/Container/Container';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    if (
      this.state.contacts.find(contactsEl => contactsEl.name === contact.name)
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContactsHandler = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContactHandler = id => {
    this.setState({
      contacts: this.state.contacts.filter(contactsEl => contactsEl.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onChange={this.changeFilter} />
        ) : (
          <p>You have no contacts yet</p>
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={this.filteredContactsHandler()}
            onDelete={this.deleteContactHandler}
          />
        )}
      </Container>
    );
  }
}

export { App };
