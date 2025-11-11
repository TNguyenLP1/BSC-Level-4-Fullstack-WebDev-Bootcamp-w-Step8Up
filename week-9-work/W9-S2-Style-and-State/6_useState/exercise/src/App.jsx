import { useEffect, useState, useRef } from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';
import contacts from './data/contacts.json';

function App() {
  const [contactList, setContactList] = useState(
    contacts.map((c, i) => ({
      ...c,
      image: `https://i.pravatar.cc/150?img=${i + 1}`, // assign initial avatars
    }))
  );

  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    company: '',
    website: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const firstInvalidRef = useRef(null);

  const validate = (fieldValues = newContact) => {
    const temp = { ...errors };

    if ('name' in fieldValues)
      temp.name = fieldValues.name ? '' : 'Name is required';

    if ('email' in fieldValues) {
      if (!fieldValues.email) temp.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(fieldValues.email))
        temp.email = 'Invalid email format';
      else temp.email = '';
    }

    if ('phone' in fieldValues)
      temp.phone = fieldValues.phone ? '' : 'Phone number is required';

    setErrors({ ...temp });
  };

  useEffect(() => {
    validate(newContact);
  }, [newContact]);

  useEffect(() => {
    if (submitted) {
      const invalidField = Object.keys(errors).find((key) => errors[key] !== '');
      if (invalidField && firstInvalidRef.current) firstInvalidRef.current.focus();
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted, errors]);

  const onFieldChange = (e) => {
    const { id, value } = e.target;
    setNewContact({ ...newContact, [id]: value });
  };

  const isValid = () =>
    newContact.name && /\S+@\S+\.\S+/.test(newContact.email) && newContact.phone;

  const onAddContact = (e) => {
    e.preventDefault();
    setSubmitted(true);
    validate(newContact);

    if (isValid()) {
      const randomAvatar = `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      ) + 1}`; // random avatar ID 1–70

      const updatedList = [...contactList, { ...newContact, image: randomAvatar }];
      setContactList(updatedList);
      setNewContact({
        name: '',
        email: '',
        phone: '',
        position: '',
        company: '',
        website: '',
      });
      setErrors({});
    }
  };

  const onSort = (sortType) => {
    const sorted = [...contactList].sort((a, b) =>
      a[sortType].localeCompare(b[sortType])
    );
    setContactList(sorted);
  };

  return (
    <div className="app">
      <div className="new-contact-container">
        <h2>Add a new contact</h2>
        <form onSubmit={onAddContact}>
          <input
            ref={errors.name ? firstInvalidRef : null}
            type="text"
            placeholder="Name"
            id="name"
            value={newContact.name}
            onChange={onFieldChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

          <input
            ref={errors.email ? firstInvalidRef : null}
            type="text"
            placeholder="Email"
            id="email"
            value={newContact.email}
            onChange={onFieldChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

          <input
            ref={errors.phone ? firstInvalidRef : null}
            type="text"
            placeholder="Phone"
            id="phone"
            value={newContact.phone}
            onChange={onFieldChange}
          />
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

          <input
            type="text"
            placeholder="Position"
            id="position"
            value={newContact.position}
            onChange={onFieldChange}
          />
          <input
            type="text"
            placeholder="Company"
            id="company"
            value={newContact.company}
            onChange={onFieldChange}
          />
          <input
            type="text"
            placeholder="Website"
            id="website"
            value={newContact.website}
            onChange={onFieldChange}
          />

          <button type="submit">Add Contact</button>
        </form>

        <div className="button-container">
          <button onClick={() => onSort('name')}>Sort by Name</button>
          <button onClick={() => onSort('position')}>Sort by Position</button>
        </div>
      </div>

      <div className="card-container">
        {contactList.map((contact, index) => (
          <BusinessCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
