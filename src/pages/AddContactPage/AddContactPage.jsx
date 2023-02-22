import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/contacts.slice';
import { Form, Label, Input, Button } from './AddContactPage.styled';
import { getContacts } from 'redux/contacts/contacts.selector';

const AddContactPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(() => localStorage.getItem('name') ?? '');
  const [number, setNumber] = useState(
    () => localStorage.getItem('number') ?? ''
  );
  const contacts = useSelector(getContacts);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        localStorage.setItem('name', value);
        setName(value);
        break;

      case 'number':
        localStorage.setItem('number', value);
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const findDubleContact = name => {
    const dubleContact = contacts.find(contact => contact.name === name);

    if (dubleContact) {
      return true;
    }
    return false;
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log('add contact: ');

    if (findDubleContact(name)) {
      alert(`${name} is already in contacts`);
      setName('');
      return false;
    }
    const contact = { id: nanoid(), name, number };

    dispatch(addContacts(contact));

    localStorage.removeItem('name');
    localStorage.removeItem('number');

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default AddContactPage;
