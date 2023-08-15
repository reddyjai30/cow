import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiUser } from 'react-icons/fi';
import { SiGoogle } from 'react-icons/si';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  const handleGoogleLogin = () => {
    // Handle Google Sign-In
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
      <h1 className='text-4xl font-bold mb-8'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
        <div className='flex items-center'>
          <FiUser className='mr-2' />
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
            className='px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='flex items-center'>
          <FiLock className='mr-2' />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            className='px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out'
        >
          Login
        </button>

        <div className=' text-center'>OR</div>

        <button
          onClick={handleGoogleLogin}
          className='flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition duration-300 ease-in-out'
        >

          <SiGoogle className='mr-2' />
          Login with Google
        </button>
      </form>
      <Link to='/signup' className='mt-4 text-blue-500 hover:underline'>
        Create an account
      </Link>
    </div>
  );
};

export default Login;
