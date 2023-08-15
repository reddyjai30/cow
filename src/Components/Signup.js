import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiGoogle } from 'react-icons/si';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
  };

  const handleGoogleSignup = () => {
    // Handle Google Sign-Up
    // You can integrate the Google Sign-In API here
  };

  useEffect(() => {
    // Load Google Sign-In API script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script tag
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
      <h1 className='text-4xl font-bold mb-8'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
          className='px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          className='px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
          className='px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out'
        >
          Sign Up
        </button>
      </form>

      <div className=' text-center my-2'>OR</div>
      <button
        onClick={handleGoogleSignup}
        className='flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition duration-300 ease-in-out'
      >
        <SiGoogle className='mr-2' />
        Sign Up with Google
      </button>
      <Link to='/login' className='mt-4 text-blue-500 hover:underline'>
        Already have an account? 
      </Link>
    </div>
  );
};

export default Signup;
