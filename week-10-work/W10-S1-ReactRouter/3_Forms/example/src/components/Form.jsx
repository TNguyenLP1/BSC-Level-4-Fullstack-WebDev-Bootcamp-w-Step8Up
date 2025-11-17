import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    hearFrom: '',
    otherDetail: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear individual field error as user types
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.hearFrom) newErrors.hearFrom = 'Please select an option';
    if (formData.hearFrom === 'Other' && !formData.otherDetail.trim()) {
      newErrors.otherDetail = 'Please specify how you heard about us';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
      return;
    }
    setSuccessMessage('Form submitted successfully!');
    setErrors({});
    console.log('Form Data:', formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      hearFrom: '',
      otherDetail: ''
    });
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <div className="form-group">
          <label>
            How did you hear of us:
            <select
              name="hearFrom"
              value={formData.hearFrom}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Word of mouth">Word of mouth</option>
              <option value="Other">Other</option>
            </select>
          </label>
          {errors.hearFrom && <p className="error">{errors.hearFrom}</p>}
        </div>

        {formData.hearFrom === 'Other' && (
          <div className="form-group">
            <label>
              Please specify:
              <input
                type="text"
                name="otherDetail"
                value={formData.otherDetail}
                onChange={handleChange}
              />
            </label>
            {errors.otherDetail && <p className="error">{errors.otherDetail}</p>}
          </div>
        )}

        <div className="form-buttons">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
