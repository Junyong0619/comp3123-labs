import './App.css';
import { useState } from 'react';

const emptyForm = {
  email: '',
  fullName: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
};

function App() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="App">
     <h1>Student Data Entry Form</h1>

     <form className='entry-form' onSubmit={handleSubmit}>
      <label>
        Email:
        <input type='email' name='email' value={form.email} onChange={handleChange} required />
      </label>
      <label>
        Full Name:
        <input type='text' name='fullName' value={form.fullName} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type='text' name='address' value={form.address} onChange={handleChange} required />
      </label>
      <label>
        City:
        <input type='text' name='city' value={form.city} onChange={handleChange} required />
      </label>
      <label>
        Province:
        <input type='text' name='province' value={form.province} onChange={handleChange} required />
      </label>
      <label>
        Postal Code:
        <input type='text' name='postalCode' value={form.postalCode} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>      
      </form> 

      {submitted && (
        <div className="result">
          <h2>Entered Information</h2> 
          <p>Email:</p>
          <p className="value">{submitted.email}</p>
          <p>Full Name:</p>
          <p className="value">{submitted.fullName}</p>
          <p>Address:</p>
          <p className="value">{submitted.address}</p>
          <p>City:</p>
          <p className="value">{submitted.city}</p>
          <p>Province:</p>
          <p className="value">{submitted.province}</p>
          <p>Postal Code:</p> 
          <p className="value">{submitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
