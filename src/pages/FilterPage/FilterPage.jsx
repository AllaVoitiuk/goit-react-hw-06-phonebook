import { Modal } from 'components/Layout/Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts.selector';
import { deleteContacts } from 'redux/contacts/contacts.slice';
import { Label, Input, Li, Button } from './FilterPage.styled';

export const FilterPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const contacts = useSelector(getContacts);

  const handleDelete = id => {
    setIsModalOpen(true);
    console.log('id: ' + id);
    setCurrentId(id);
    dispatch(deleteContacts({ id }));
  };

  const changeFilter = event => {
    setFilterValue(event.target.value);
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const visibleContacts = getFilteredContacts;

  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" value={filterValue} onChange={changeFilter} />
      </Label>
      {visibleContacts.length !== 0 && (
        <ul>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <Li key={id}>
                {name}: {number}
                <Button type="button" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
              </Li>
            );
          })}
        </ul>
      )}
      {isModalOpen && <Modal id={currentId} onClose={setIsModalOpen} />}
    </>
  );
};

export default FilterPage;
