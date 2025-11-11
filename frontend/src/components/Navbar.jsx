import React from 'react'
import {assets} from "../assets/assets";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const {navigate, token} = useAppContext();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
       <div onClick={() =>navigate('/')} className='flex items-center gap-2 cursor-pointer'>
         <img src="/favicon.svg" alt="logo" className='w-8 h-8'/>
         <span className='text-xl font-bold'>Blogorithm</span>
       </div>
        <button onClick={()=> navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm
          cursor-pointer bg-primary text-white px-6 py-2'>
          {token ? 'Dashboard' : 'Login'}
           <img src={assets.arrow} className='w-2' alt="arrow"/>
        </button>      
    </div> 
  )
}

export default Navbar
