import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

function Form() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    watch, 
    reset 
  } = useForm({ mode: 'onChange' }); // onChange mode for real-time validation

  const [successMessage, setSuccessMessage] = useState('');
  const hearFrom = watch('hearFrom'); // Watch the dropdown for conditional field

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setSuccessMessage('Form submitted successfully!');
    reset(); // Reset the form fields
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
            />
          </label>
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address'
                }
              })}
            />
          </label>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>
            Message:
            <textarea
              {...register('message', { required: 'Message is required' })}
            />
          </label>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        <div className="form-group">
          <label>
            How did you hear of us:
            <select
              {...register('hearFrom', { required: 'Please select an option' })}
            >
              <option value="">-- Select --</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Word of mouth">Word of mouth</option>
              <option value="Other">Other</option>
            </select>
          </label>
          {errors.hearFrom && <p className="error">{errors.hearFrom.message}</p>}
        </div>

        {hearFrom === 'Other' && (
          <div className="form-group">
            <label>
              Please specify:
              <input
                type="text"
                {...register('otherDetail', { required: 'Please specify how you heard about us' })}
              />
            </label>
            {errors.otherDetail && <p className="error">{errors.otherDetail.message}</p>}
          </div>
        )}

        <div className="form-buttons">
          <button type="submit" className="submit-button">Submit</button>
          <button 
            type="button" 
            className="clear-button" 
            onClick={() => {
              reset();
              setSuccessMessage('');
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
