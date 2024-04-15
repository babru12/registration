import React, { useState } from 'react';
import axios from 'axios'; 
import './Resister.css'

const Resister = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      mobileno: '',
      address: ''
    });
  
  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          setLoading(true);
          const response = await axios.post('http://localhost:3001/register', formData);
          console.log(response)
          setMessage(response.data);
          alert("successfully registered")
      } catch (error) {
          setError(error);
          alert("error")
      }
      finally {
          setLoading(false);
      }
  };

  return (
    <div className="main">
    <div className="box">
      <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
        <label htmlFor="username">Username :</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder='write your name here ' />
                
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        
        <label htmlFor="mobileno">Mobile Number:</label>
        <input type="text" id="mobileno" name="mobileno" value={formData.mobileno} onChange={handleChange} />
        
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        <button type="submit">Register</button>
        {loading && (<h3 style={{color:'blue'}}>Proecssing..</h3>)}
        {error && (<h3 style={{color:'red'}}>{error.message}</h3>)}
        {message && (<h3 style={{color:'green'}}>{message}</h3>)}
      </form>
           
    </div>
    </div>
  );
};

export default Resister;
