import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          setLoading(true);
          const response = await axios.post('http://localhost:3001/login', formData);
          if(response.data.message == 'success') {
              sessionStorage.setItem('isLoggedIn', 'true');
              navigate('/student/studenthome');
          } else {
              setMessage(response.data.message);
          } 

      } catch (error) {
          setError(error);
      }
      finally {
          setLoading(false);
      }
  };

  return (
    <React.Fragment>
    <Navbar/>
    <div className="maincontainer">
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        
         <label for="email">Email</label> 
        <input type="text" placeholder="Email or Phone" id="email" name='email' onChange={handleChange} required/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name='password'  onChange={handleChange} required/>

        <button>Log In</button>
        <div className="social">
          <div className="go"><Link to='/Resister' className='btn'>sign up</Link></div>
          <div className="fb"><Link to='/' className='btn2'>forgot password</Link></div>
        </div>
              {loading && (<h3 style={{color:'blue'}}>Proecssing..</h3>)}
              {error && (<h3 style={{color:'red'}}>{error.message}</h3>)}
              {message && (<h3 style={{color:'red'}}>{message}</h3>)}
        </form>
    </div>
    </React.Fragment>
  )

}

export default Login

