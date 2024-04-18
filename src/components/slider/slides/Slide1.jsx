import React from 'react'
import styles from './Slide1.module.css';

const Slide1 = () => {
  return (
  <div className={`${styles.Slide1BG} flex items-center `}>
    <div className='flex flex-col font-bold gap-16 ml-20'>
    <span className='text-gray-50'>Sale is Live</span>
     <a className='bg-white font-bold p-1 rounded-md ' href='#'>Learn More</a>
    </div>
   
    </div>
  )
}

export default Slide1