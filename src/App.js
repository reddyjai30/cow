import './App.css';
import { Link } from 'react-router-dom'
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

function App() {
  

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
      <h1 className='text-4xl font-bold mb-8'>Cows Management Project</h1>
      <div className='flex space-x-4'>
      <Link
          to='/cowslist'
          className='flex items-center px-4 py-2 bg-blue-900 text-white rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out'
        >
          <FiLogIn className='mr-2' />
          Guest Login
        </Link>
        <Link
          to='/login'
          className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out'
        >
          <FiLogIn className='mr-2' />
          Login
        </Link>
        <Link
          to='/signup'
          className='flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition duration-300 ease-in-out'
        >
          <FiUserPlus className='mr-2' />
          Sign Up
        </Link>
      </div>
    </div>
  );



}

export default App;
