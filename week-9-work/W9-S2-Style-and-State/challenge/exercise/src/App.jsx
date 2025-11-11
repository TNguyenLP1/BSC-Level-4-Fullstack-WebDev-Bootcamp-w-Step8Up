import { useEffect, useState, useRef } from "react";
import "./App.css";
import BusinessCard from "./components/BusinessCard";
import contacts from "./data/contacts.json";

function App() {
  const [contactList, setContactList] = useState(
    contacts.map((c) => ({ ...c, avatar: `https://i.pravatar.cc/150?u=${c.email}` }))
  );
  const [newContact, setNewContact] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const timerRef = useRef(null);

  // Timer for error messages
  useEffect(() => {
    if (errorMessage) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setErrorMessage(""), 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [errorMessage]);

  const onFieldChange = (e) => {
    setNewContact({ ...newContact, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const onAddContact = () => {
    if (!newContact.name || !newContact.email || !newContact.phone) {
      setErrorMessage("Name, Email, and Phone are required.");
      return;
    }
    if (!validateEmail(newContact.email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    const avatarUrl = `https://i.pravatar.cc/150?u=${newContact.email}`;

    setContactList([...contactList, { ...newContact, avatar: avatarUrl }]);
    setNewContact({});
    setErrorMessage("");
  };

  const onSort = (sortType) => {
    const sorted = [...contactList].sort((a, b) =>
      a[sortType].localeCompare(b[sortType])
    );
    setContactList(sorted);
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Add Contact Form */}
      <div className="new-contact-container">
        <h2>Add New Contact</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="add-contact-form"
        >
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={newContact.name || ""}
            onChange={onFieldChange}
          />
          <input
            type="text"
            placeholder="Position"
            id="position"
            value={newContact.position || ""}
            onChange={onFieldChange}
          />
          <input
            type="text"
            placeholder="Company"
            id="company"
            value={newContact.company || ""}
            onChange={onFieldChange}
          />
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={newContact.email || ""}
            onChange={onFieldChange}
          />
          <input
            type="text"
            placeholder="Phone"
            id="phone"
            value={newContact.phone || ""}
            onChange={onFieldChange}
          />
          <input
            type="text"
            placeholder="Website"
            id="website"
            value={newContact.website || ""}
            onChange={onFieldChange}
          />
          <button className="add-contact-btn" onClick={onAddContact}>
            Add Contact
          </button>
        </form>

        {/* Error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Search & Sort */}
        <div className="search-sort-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="sort-buttons">
            <button onClick={() => onSort("name")}>Sort by Name</button>
            <button onClick={() => onSort("position")}>Sort by Position</button>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="card-container">
        {filteredContacts.map((contact, index) => (
          <BusinessCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
